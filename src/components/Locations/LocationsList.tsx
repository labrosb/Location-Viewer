import React, {useEffect, useRef} from 'react';
import {GestureResponderEvent} from 'react-native';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from '../../state/store';
import {
  addFavorite,
  removeFavorite,
} from '../../state/slices/favoriteLocationsSlice';
import LocationItem from './LocationsItem';
import {ItemMargin, ItemWidth} from './LocationsItem.UI';
import {List, ListMargin} from './LocationsList.UI';
import type {Favorites} from '../../state/slices/favoriteLocationsSlice';
import type {LocationsNavigationProp} from '../../navigation/types';
import type {Location} from '../../@models/location';

type Props = {
  locations: Location[];
  favorites: Favorites;
  selectedLocationIndex?: number;
};

const LocationsList: React.FC<Props> = ({
  locations,
  favorites,
  selectedLocationIndex,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<LocationsNavigationProp>();

  const listRef = useRef<FlatList>();

  useEffect(() => {
    if (selectedLocationIndex !== undefined) {
      listRef.current?.scrollToIndex({
        animated: true,
        index: selectedLocationIndex,
        viewPosition: 0,
      });
    }
  }, [selectedLocationIndex]);

  const onFavoriteClick = (ev: GestureResponderEvent, item: Location): void => {
    ev.preventDefault();
    const {id} = item;
    if (favorites[id]) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const onItemClick = (ev: GestureResponderEvent, item: Location): void => {
    ev.preventDefault();
    navigation.navigate('LocationDetails', {location: item});
  };

  return (
    <List
      horizontal
      testID="locations-list"
      ref={listRef}
      data={locations}
      renderItem={({item}: {item: Location}) => (
        <LocationItem
          isFavorite={!!favorites[item.id]}
          {...{
            item,
            favorites,
            onItemClick,
            onFavoriteClick,
          }}
        />
      )}
      keyExtractor={(item: Location) => item.id}
      extraData={favorites}
      scrollToIndex={selectedLocationIndex}
      getItemLayout={(_: unknown, index: number) => ({
        length: ItemWidth + ItemMargin * 2,
        offset: ListMargin + (ItemWidth + ItemMargin * 2) * index,
        index,
      })}
    />
  );
};

export default LocationsList;

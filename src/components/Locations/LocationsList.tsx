import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import LocationItem from './LocationsItem';
import {ItemMargin, ItemWidth} from './LocationsItem.UI';
import {List, ListMargin} from './LocationsList.UI';
import type {Favorites} from '../../state/slices/favoriteLocationsSlice';
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
  const listRef = useRef<FlatList>();
  useEffect(() => {
    if (selectedLocationIndex !== undefined) {
      listRef.current?.scrollToIndex({
        animated: true,
        index: selectedLocationIndex,
        viewPosition: 1,
      });
    }
  }, [selectedLocationIndex]);

  return (
    <List
      horizontal
      ref={listRef}
      data={locations}
      renderItem={LocationItem}
      keyExtractor={(item: Location) => item.id}
      extraData={favorites}
      scrollToIndex={selectedLocationIndex}
      getItemLayout={(_: unknown, index: number) => ({
        length: ItemWidth + ItemMargin * 2,
        offset: ListMargin + (20 + ItemWidth + ItemMargin * 2) * index,
        index,
      })}
    />
  );
};

export default LocationsList;

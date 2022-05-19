import {
  configureStore,
  combineReducers,
  unwrapResult as nativeUnwrapResult,
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import locationsReducer from './slices/locationsSlice';
import favoriteLocationsReducer from './slices/favoriteLocationsSlice';

const reducers = combineReducers({
  locations: locationsReducer,
  favorites: favoriteLocationsReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['favorites'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

// FROM DOCUMENTATION: Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useNativeDispatch<any>();
export const useSelector: TypedUseSelectorHook<RootState> = useNativeSelector;

export const unwrapResult = nativeUnwrapResult;

export const persistor = persistStore(store);
export default store;

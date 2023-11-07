// // import { devToolsEnhancer } from '@redux-devtools/extension';
// // import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { catalogReducers } from './catalogReducer';
// import { authReducer } from './authentificated/authReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritePersistConfig = {
  key: 'catalogStorage',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    catalogStorage: persistReducer(favoritePersistConfig, catalogReducers),
    //     auth: persistReducer(authPersistConfig, authReducer),
    //     // ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

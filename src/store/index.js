import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux'
import todoAppReducers from '../reducers/index'
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
  
// const store = createStore(todoAppReducers);

// export default store;

// 以下redux-persist


export default createStore = () => {

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage ,
    }

    

    const persistedReducer = persistReducer(persistConfig, todoAppReducers);

    let store = reduxCreateStore(
        persistedReducer,
        applyMiddleware(
            
        )
    );
    
    let persistor = persistStore(store);

    
    return { store, persistor };

}
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import store, {IMainStore}  from './main-store/reducer'

export interface RootStore {
  mainStore: IMainStore
}

const rootReducer = combineReducers({
  mainStore: store
})


export const configureStore = (initialState: RootState) => {
  return createStore(rootReducer, initialState, devToolsEnhancer({}))
}

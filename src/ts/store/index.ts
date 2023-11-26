import { configureStore } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from "react-redux";
import roomFilterListReducer from "./modules/roomFilterList";


const store = configureStore({
  reducer: {
    roomFilterList: roomFilterListReducer,
  },
  //シリアル値以外をstoreに入れる際の警告を消す
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

//カスタムセレクターとディスパッチを定義、これを使うと型情報が参照される。
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

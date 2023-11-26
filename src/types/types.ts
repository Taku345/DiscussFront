import { Room } from './apiTypes';

//RoomFilterPanelの定数と型
//配列からユニオン型を得る実験、e.target.valueがstringなのでユニオン型のstateに入れられず断念
// const statusOptions = ['開始前', '進行中', '終了', '全て'] as const;
// type StatusOptions = typeof statusOptions[number];

export const statusOptions = ['開始前', '進行中', '終了', '全て'];
export const sortByOptions = ['書込み数', '人数'];
export class RoomFilter {
  status: string = '開始前';
  keyword: string = '';
  sortBy: string = '人数';
};

export class RoomFilterList {
  filter: RoomFilter = new RoomFilter();
  list: Room[] = [];
  status: string = '';
}
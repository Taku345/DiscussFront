import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { ChangeEvent } from 'react'
import { sortByOptions, statusOptions } from '../../types/types';
import { useAppDispatch, useAppSelector } from "../store/index";
import { changedFilter, initRoomFilterList } from "../store/modules/roomFilterList"

export default function RoomFilterPanel() {

  const roomFilterList = useAppSelector(state => state.roomFilterList);

  const dispatch = useAppDispatch();
  const filterChanged = (e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(changedFilter({ [e.target.name]: e.target.value }));
    console.log(roomFilterList.list);
  }

  return (
    <Box sx={{ display: 'flex', pb: '4px' }}>
      <FormControl size='small'>
        <InputLabel id='status'>status</InputLabel>
        <Select
          value={roomFilterList.filter.status}
          label='status'
          name='status'
          onChange={filterChanged}
        >
          {statusOptions.map((val) => <MenuItem key={val} value={val}>{val}</MenuItem>)}
        </Select>
      </FormControl>

      <TextField
        size='small'
        value={roomFilterList.filter.keyword}
        label='絞り込み検索'
        placeholder='キーワードを入力...'
        name='keyword'
        onChange={filterChanged}
      />

      <FormControl size='small'>
        <InputLabel id='status'>並び替え</InputLabel>
        <Select
          value={roomFilterList.filter.sortBy}
          label='status'
          name='sortBy'
          onChange={filterChanged}
        >
          {sortByOptions.map((val) => <MenuItem key={val} value={val}>{val}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

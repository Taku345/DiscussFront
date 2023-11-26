import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Room } from '../../types/apiTypes';
import { useAppDispatch, useAppSelector } from '../store';
import { initRoomFilterList } from '../store/modules/roomFilterList';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'ルーム名',
    width: 200
  },
  {
    field: 'description',
    headerName: '議論テーマ説明',
    width: 150,
    editable: false,
  },
  {
    field: 'started_at',
    headerName: '開始日時',
    width: 110,
    editable: false,
  },
  {
    field: 'finished_at',
    headerName: '終了日時',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: '人数',
    description: '人数 / 最大人数',
    sortable: false,
    width: 80,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



export default function RoomList() {

  const roomFilterList = useAppSelector(state => state.roomFilterList);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(initRoomFilterList());
  }, [])

  return (
    <DataGrid
      sx={{ height: '100%' }}
      rows={roomFilterList.list
        .filter((room) => {
          return room.name.indexOf(roomFilterList.filter.keyword) !== -1
        })
      }
      columns={columns}
      // initialState={{
      //   pagination: {
      //     paginationModel: {
      //       pageSize: 5,
      //     },
      //   },
      // }}
      // pageSizeOptions={[5]}
      // checkboxSelection
      // disableRowSelectionOnClick
      hideFooter={true}
      rowHeight={30}
    />
  );
}

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from '../store';
import { DataGrid } from '@mui/x-data-grid';


export default function RoomList() {

  const roomFilterList = useAppSelector(state => state.roomFilterList);

  return (
    <div>


      <List sx={{ width: '100%', height: '100%', bgcolor: 'gray' }}>
        {roomFilterList.list
          .filter((room) => {
            return room.name.indexOf(roomFilterList.filter.keyword) !== -1
          })
          .map((room) => {
            return (
              <ListItemButton aria-label="comment" key={room.id}>
                <ListItemText
                  primary={room.name}
                  secondary={`開始時刻:${room.started_at} / 終了時刻:${room.finished_at} / ルーム説明:${room.discription}`}

                />
              </ListItemButton>
            )
          })}
      </List>
    </div>
  )
}

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Room } from '../../types/apiTypes'
import { Button } from '@material-ui/core';

const Rooms: React.FC = () => {

  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  const [room, setRoom] = useState<Room>();

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost/api/rooms/1";

  useEffect(() => {
    (async () => {
      try {
        axios.get('/sanctum/csrf-cookie').then(response => {
          // ログイン…
        })
        const res: AxiosResponse<Room> = await axios.get<Room>(url);
        setRoom(res.data);
        return;
      } catch (e) {
        return e;
      }
    })();//即時関数実行の()
  }, []);

  const updateRoom = async (e: any) => {
    e.preventDefault();
    try {
      const res: AxiosResponse<Room> = await axios.get<Room>(`http://localhost/api/rooms/${e.target.value}`);
      console.log(res.data);
      setRoom(res.data);
      return;
    } catch (e) {
      return e;
    }
  };

  const storeRoom = async (e: any) => {
    e.preventDefault();
    const newRoom = {
      'name': 'ルーム作成テスト',
      'explanation': 'ルーム作成テスト説明文',
      'started_at': new Date().toLocaleString('sv-SE'),
      'finished_at': new Date().toLocaleString('sv-SE'),
    }
    try {
      const res: AxiosResponse<Room> = await axios.post<Room>(`http://localhost/api/rooms`, newRoom);
      console.log(res.data);
      // setRoom(res.data);
      return;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return (
    <div>
      <p>ルーム取得テスト</p>
      {room && <>{Object.entries(room).map(([key, value]) => <p key={key}>{key}:{value}</p>)}</>}


      <input type="number" onChange={updateRoom} ></input >
      <button onClick={storeRoom} >storeRoom</button >
    </div >
  );
}

export default Rooms;
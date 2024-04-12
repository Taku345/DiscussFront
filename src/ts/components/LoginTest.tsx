import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosAPI } from '../api/axiosAPI';

import { Room, User } from '../../types/apiTypes';
import { DrawerHeader } from './LeftSideBar/LeftDrawer';

export default function LoginTest() {

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password');
  const [users, setUsers] = useState<User[]>([]);

  const login = (): void => {
    axiosAPI.get('/sanctum/csrf-cookie').then((res) => {
      console.log("自分のログGET/sanctum/csrf-cookie", res)
      console.log('自分のログ', email, password, res.data.csrfToken)
      axiosAPI.post('/api/login', { email, password }).then((res) => {
        console.log("自分のログ:post res", res);
      })
    })
  }
  const logout = () => {
    axiosAPI.post('/api/logout').then((res) => {
      console.log(res);
      document.cookie = "XSRF-TOKEN=; max-age=0";
    })
  }

  const getUsers = () => {
    axiosAPI.get<User[]>(`/api/users`).then((res: AxiosResponse<User[]>) => {
      setUsers(res.data);
    })
  }

  const getUsersSecure = () => {
    axiosAPI.get<User[]>(`/api/users-secure`).then((res: AxiosResponse<User[]>) => {
      setUsers(res.data);
    })
  }

  const reset = () => { setUsers([]) }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const storeRoom = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newRoom = {
      "user_id": 1,
      "name": 'react12/3ルーム作成テスト',
      "description": 'reactルーム作成テスト説明文',
      "started_at": new Date().toLocaleString('sv-SE'),
      "finished_at": new Date().toLocaleString('sv-SE'),
    }
    try {
      const res: AxiosResponse<Room> = await axiosAPI.post<Room>(`${import.meta.env.VITE_API_URL}/api/rooms`, newRoom, {
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRF-TOKEN': res.data.csrfToken, //ここ自分で設定する可能性大
          // 他の必要なヘッダーがあれば追加
        }
      });
      console.log("post成功やで", res.data);
      // setRoom(res.data);
      return;
    } catch (e) {
      console.log("postエラーんご", e);
      return e;
    }
  };

  return (
    <div>
      <DrawerHeader />
      <nav>
        <button onClick={login}>ログイン</button>
        <button onClick={logout}>ログアウト</button>
        <button onClick={getUsers}>User 一覧</button>
        <button onClick={getUsersSecure}>User 一覧 secure</button>
        <button onClick={reset}>リセット</button>
        <button onClick={storeRoom} >storeRoom</button >
      </nav>
      <br />
      <div>
        <label>email</label>
        <input type="text" value={email} onChange={onChangeEmail} />
        <label>password</label>
        <input type="password" value={password} onChange={onChangePassword} />
        <p>なんとかなれー</p>
      </div>
      <div>
        {
          users.map((user) => {
            return (
              <p key={user.email}>{user.name}</p>
            )
          })
        }
      </div>
    </div>
  );
}


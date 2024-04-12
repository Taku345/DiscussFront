import { useState } from "react";
import { DrawerHeader } from "../LeftSideBar/LeftDrawer";
// import './Login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div>
      <DrawerHeader />

      <div className="login">
        <h1>Login</h1>
        <form method="post">
          <input type="text" placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
          <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
        </form>
      </div>
    </div>
  )
}
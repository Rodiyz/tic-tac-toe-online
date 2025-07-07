import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFields({ login, email, password, onChangeLogin, onChangeEmail, onChangePassword}: {
  login: string;
  email: string;
  password: string;
  onChangeLogin: (login: string) => void;
  onChangePassword: (password: string) => void;
  onChangeEmail: (email: string) => void;
}) {

  const loginId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Ваш Логин</Label>
        <Input 
          id={loginId}
          name="name" 
          type="login"
          placeholder="Введите логин"
          value={login}
          onChange={(e) => onChangeLogin(e.target.value)}
          required 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={emailId}>Email</Label>
        <Input 
          id={emailId} 
          name="email" 
          type="email" 
          placeholder="Введите email"
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
          required 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Пароль</Label>
        <Input 
          id={passwordId} 
          name="password" 
          type="password" 
          placeholder="Создайте пароль" 
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          required 
        />
      </div>
    </> 
  );
}



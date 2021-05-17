import { createContext, ReactNode, useState } from "react";

interface User {
  userName: string;
  password: string;
}

interface UserContextData {
  setUserAndPassword: ({ password, userName }: User) => void;
  handleCreateUser: ({ password, userName }: User) => void;
  userNameContext: string;
  passwordContext: string;
  createUser: User[];
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userNameContext, setUserName] = useState("");
  const [passwordContext, setPassword] = useState("");
  const [createUser, setCreateUser] = useState<User[]>([]);

  const setUserAndPassword = ({ password, userName }: User) => {
    setUserName(userName);
    setPassword(password);
  };

  const handleCreateUser = ({ password, userName }: User) => {
    const data: User = {
      password,
      userName,
    };
    setCreateUser([...createUser, data]);
  };

  return (
    <UserContext.Provider
      value={{
        setUserAndPassword,
        handleCreateUser,
        userNameContext,
        passwordContext,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

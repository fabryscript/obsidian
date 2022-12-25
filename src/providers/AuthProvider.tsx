import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, FC, ReactElement, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { auth } from "../logic/firebase";

export const UserContext = createContext<User | null>(null);

const AuthProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(
      auth,
      (_user) => {
        setUser(_user);
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, [user]);

  return <UserContext.Provider value={user}>
    {loading ? <Loading /> : children}
  </UserContext.Provider>;
};

export default AuthProvider;
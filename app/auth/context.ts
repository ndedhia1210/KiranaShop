import React from "react";
import { UserDetails } from "../models";

export interface AuthContextType {
    user: UserDetails;
    setUserObject?: (userObj: UserDetails) => void;
  }

const AuthContext: any = React.createContext<AuthContextType | null>(null);

export default AuthContext;

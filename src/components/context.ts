import { createContext } from "react";
import { User } from "./UserDashboard";
export const UserContext=createContext<User|undefined>(undefined);

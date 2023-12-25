import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function AuthUser() {
  return useContext(AuthContext);
}

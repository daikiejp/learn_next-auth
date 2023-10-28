"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Children {
  children?: ReactNode;
}

const AuthProvider = ({ children }: Children) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect, useCallback, useRef, useState } from "react"
import { UserDetailContext } from "./context/userDetailContext"
import Header from "./_components/Header"


interface UserDetailType {
  id: string;
  email: string;
  name: string;
  // Add other user detail fields as needed
}
export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useUser();
  const hasCreatedUser = useRef(false);
  const [userDetail, setUserDetail] = useState<UserDetailType | null>(null);

  const createNewUser = useCallback(async () => {
    if (!user || hasCreatedUser.current) return;

    try {
      hasCreatedUser.current = true;
      const result = await axios.post('/api/user', {});
      console.log(result);
    } catch (error) {
      console.error("Failed to create user:", error);
      // Reset flag on error so we can retry
      hasCreatedUser.current = false;
    }
  }, [user]);

  useEffect(() => {
    createNewUser();
  }, [createNewUser]);

  return <NextThemesProvider {...props}>
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div className="flex flex-col items-center">
        <Header />
      </div>
        {children}
    </UserDetailContext.Provider>
  </NextThemesProvider>
}
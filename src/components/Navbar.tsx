"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { Logout } from "@/lib/functions/logins";

import Logo from "./Logo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const session = authClient.useSession();
  return (
    <div className="flex items-center justify-between p-4">
      <Logo />
      {session?.data?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              {session?.data?.user?.image ? (
                <AvatarImage src={session?.data?.user?.image} alt="User" />
              ) : (
                <AvatarFallback className="bg-[#662d91] font-semibold text-white">
                  {session?.data?.user?.name?.charAt(0)}
                </AvatarFallback>
              )}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={Logout}>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/authentication">
          <Button variant="outline">Iniciar sessão</Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;

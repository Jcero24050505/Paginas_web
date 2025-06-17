
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Bell, Heart, LogOut, Settings, User } from "lucide-react";

export const UserButton = () => {
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="https://github.com/shadcn.png" alt="Usuario" />
            <AvatarFallback className="bg-carmarketplace-100 text-carmarketplace-800">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to="/perfil" className="flex items-center cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Mi perfil</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/favoritos" className="flex items-center cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Favoritos</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/notificaciones" className="flex items-center cursor-pointer">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notificaciones</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/ajustes" className="flex items-center cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Ajustes</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center cursor-pointer text-carmarketplace-accent-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

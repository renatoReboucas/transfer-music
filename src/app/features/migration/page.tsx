"use client";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoogleLogin, SpotifyLogin } from "@/lib/functions/logins";

const Migration = () => {
  const migrationsList = [
    {
      id: 1,
      name: "Spotify",
      icon: "/spotify.svg",
      color: "hover:bg-[#1db954]/70",
      onClick: SpotifyLogin,
    },
    {
      id: 2,
      name: "Youtube Music",
      icon: "/youtube-music.svg",
      color: "hover:bg-[#ff0000]/70",
      onClick: GoogleLogin,
    },
  ];
  return (
    <div className="flex h-screen flex-col items-center bg-zinc-50 p-5">
      <h1 className="text-2xl font-bold">Selecione a fonte de músicas</h1>

      <div className="mt-16 flex flex-wrap gap-4">
        {migrationsList.map((migration) => (
          <Card
            key={migration.id}
            className={`size-[147px] text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-xl ${migration.color}`}
            onClick={migration.onClick}
          >
            <CardHeader className="flex flex-col items-center justify-center">
              <span className="text-sm font-bold whitespace-nowrap">
                {migration.name}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src={migration.icon}
                alt={migration.name}
                width={50}
                height={50}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Migration;

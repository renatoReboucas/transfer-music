import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/db";
import { accounts } from "@/db/schema";
import { auth } from "@/lib/auth";
import CardMusicStreaming from "./_components/card-streamin";

const Migration = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const migrationsList = [
    {
      id: 1,
      name: "Spotify",
      icon: "/spotify.svg",
      color: "hover:bg-[#1db954]/70",
      type: 'spotify' as const,
    },
    {
      id: 2,
      name: "Youtube Music",
      icon: "/youtube-music.svg",
      color: "hover:bg-[#ff0000]/70",
      type: 'google' as const,
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center bg-zinc-50 p-5">
      <h1 className="text-2xl font-bold">Selecione a fonte de músicas</h1>

      <div className="mt-16 flex flex-wrap gap-4">
        {migrationsList.map((migration) => (
          <CardMusicStreaming
            key={migration.id}
            streamingProp={migration}
          />
        ))}
      </div>
    </div>
  );
};

export default Migration;

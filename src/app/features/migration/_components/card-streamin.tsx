"use client";

import Image from "next/image";
import { useAction } from "next-safe-action/hooks";

import {
  verifyGoogleTokenAction,
  verifySpotifyTokenAction,
} from "@/actions/streaming";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StreamingProp {
  id: number;
  name: string;
  icon: string;
  color: string;
  type: "spotify" | "google";
}

interface CardMusicStreamingProps {
  streamingProp: StreamingProp;
}

const CardMusicStreaming = ({ streamingProp }: CardMusicStreamingProps) => {
  const { execute: executeSpotifyAction, isExecuting: isSpotifyLoading } =
    useAction(verifySpotifyTokenAction);
  const { execute: executeGoogleAction, isExecuting: isGoogleLoading } =
    useAction(verifyGoogleTokenAction);

  const handleClick = async () => {
    if (streamingProp.type === "spotify") {
      const response = await executeSpotifyAction();
      console.log("Spotify Action Response:", response);
    } else if (streamingProp.type === "google") {
      const response = await executeGoogleAction();
      console.log("Google Action Response:", response);
    }
  };

  const isLoading = isSpotifyLoading || isGoogleLoading;

  return (
    <Card
      className={`size-[147px] cursor-pointer text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-xl ${streamingProp.color} ${isLoading ? "pointer-events-none opacity-50" : ""}`}
      onClick={handleClick}
    >
      <CardHeader className="flex flex-col items-center justify-center">
        <span className="text-sm font-bold whitespace-nowrap">
          {streamingProp.name}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="flex h-[50px] w-[50px] items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-current"></div>
          </div>
        ) : (
          <Image
            src={streamingProp.icon}
            alt={streamingProp.name}
            width={50}
            height={50}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default CardMusicStreaming;

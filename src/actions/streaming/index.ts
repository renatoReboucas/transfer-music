'use server';

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { z } from "zod";
import { db } from "@/db";
import { accounts } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

export const verifySpotifyTokenAction = actionClient
  .action(async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    
    console.log("verifySpotifyToken");
    // Adicione aqui a lógica para verificar o token do Spotify
    
    return { success: true, message: "Spotify token verified" };
  });

export const verifyGoogleTokenAction = actionClient
  .action(async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    
    console.log("verifyGoogleToken");
    const token = await db.query.accounts.findFirst({
      where: session?.user.id ? eq(accounts.userId, session.user.id) : undefined,
    });
    // console.log("token", token);
    
    return { success: true, token, message: "Google token verified" };
  });
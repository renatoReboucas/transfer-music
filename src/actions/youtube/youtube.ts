"use server";
import { eq } from "drizzle-orm";
import { google } from "googleapis";
import { headers } from "next/headers";

import { db } from "@/db";
import { clientsTokens } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

const youtube = google.youtube("v3");

export const listPlaylists = actionClient.action(async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    // Get the user's Google token from the database
    const token = await db.query.clientsTokens.findFirst({
      where: eq(clientsTokens.userId, session.user.id),
    });

    if (!token) {
      throw new Error("No Google token found for this user");
    }

    // Set up the YouTube API client with the user's token
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: token.access_token,
    });

    // Get the playlists
    const response = await youtube.playlists.list({
      auth: oauth2Client,
      part: ["snippet", "contentDetails"],
      mine: true,
      maxResults: 50,
    });

    return {
      success: true,
      data: response.data.items,
    };
  } catch (error) {
    console.error("Error fetching YouTube playlists:", error);
    return {
      success: false,
      error: "Failed to fetch YouTube playlists",
    };
  }
});

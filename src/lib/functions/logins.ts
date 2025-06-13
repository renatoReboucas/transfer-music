import { authClient } from "../auth-client";

export const SpotifyLoginProvider = async () => {
  await authClient.signIn.social({
    provider: "spotify",
    callbackURL: "/dashboard",
    scopes: [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-library-read",
      "user-read-recently-played",
    ],
  });
};

export const GoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/features/migration",
    scopes: ["email", "profile"],
  });
};

export const Logout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};

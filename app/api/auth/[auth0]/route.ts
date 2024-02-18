import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: "https://next-auth0-api",
      scope: "openid profile email read:dashboard",
    },
    returnTo: "/profile",
  }),
});

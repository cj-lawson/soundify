// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
// import Link from "next/link";
// import Navigation from "~/components/Navigation";
// import { FaSpotify } from "react-icons/fa";

import { getSession, getProviders, useSession } from "next-auth/react";
import Login from "~/components/Login";
import Feed from "~/components/Feed";

// import { api } from "~/utils/api";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  return <>{session ? <Feed /> : <Login />}</>;
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const providers = await getProviders();

  return {
    props: {
      session,
      providers,
    },
  };
}

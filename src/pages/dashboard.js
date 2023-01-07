import Head from "next/head"
import { Inter } from "@next/font/google"

import Sidebar from "../components/sidebar"
import protectedRoute from "../components/ProtectedRoutes"

const inter = Inter({ subsets: ["latin"] })

function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full md:h-[100vh] flex flex-col md:flex-row">
        <Sidebar />
      </main>
    </>
  )
}

export default protectedRoute(Dashboard)
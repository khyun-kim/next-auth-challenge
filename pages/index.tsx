import type { NextPage, NextPageContext } from 'next'
import { Session } from 'next-auth'
import { getSession, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

interface HomeProps {
  session: Session
}

const Home: NextPage<HomeProps> = ({ session }) => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/home')
    },
  })

  return (
    <div className="bg-[#F3F2Ef] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          {/* Feed */}
        </div>
        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context: NextPageContext) {
  // Check if the user is authenticated on the server...
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

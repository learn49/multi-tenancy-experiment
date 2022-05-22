import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount } from '../../contexts/AccountContext'

const Sobre: NextPage = () => {
  const account = useAccount()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <h1>Sobre {account?.friendlyName}</h1>
      <pre>{JSON.stringify(account)}</pre>
    </div>
  )
}

export default Sobre

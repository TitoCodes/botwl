import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Hero from 'components/module/hero/hero'
import GameLibrary from 'components/module/game-library/gameLibrary'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Be Our Third Wheel - Home</title>
      </Head>
      <Hero></Hero>
      <GameLibrary></GameLibrary>
    </Layout>
  )
}

export default Home

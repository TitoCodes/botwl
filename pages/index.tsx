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
        <meta name="description" content="Be Our Third Wheel is a couple that plays variety of co-op video games." />
        <meta name="og:description" content="Be Our Third Wheel is a couple that plays variety of co-op video games." />
        <meta name="og:title" content="Be Our Third Wheel - Home" />
      </Head>
      <Hero></Hero>
      <GameLibrary></GameLibrary>
    </Layout>
  )
}

export default Home

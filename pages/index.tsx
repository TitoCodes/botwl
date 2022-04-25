import type { NextPage } from 'next'
import Hero from '../components/hero/hero'
import GameLibrary from '../components/game-library/gameLibrary'
import Layout from '../components/layout/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <GameLibrary></GameLibrary>
    </Layout>
  )
}

export default Home

import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Hero from 'components/module/hero/hero'
import GameLibrary from 'components/module/game-library/gameLibrary'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <GameLibrary></GameLibrary>
    </Layout>
  )
}

export default Home

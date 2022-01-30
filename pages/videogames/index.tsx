import React from 'react'
import { Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import GameList from '@components/GameList/GameList'
import { dataVideoGames } from '../../database/dataVideoGames'

export const getStaticProps: GetStaticProps = async () => {
  const projectList = Object.values(dataVideoGames)
  return {
    props: {
      projectList,
    },
  }
}

const HomePage = ({ projectList }: { projectList: TProject[] }) => {
  return (
    <Layout>
      <Header as="h1" textAlign="center" style={{ margin: '3rem' }}>
        Video Games - Extended Reality
      </Header>
      <GameList projects={projectList} />
      <br />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage

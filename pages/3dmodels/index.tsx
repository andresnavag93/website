import React from 'react'
import { Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ModelList from '@components/ModelList/ModelList'
import { dataModels } from '../../database/dataModels'

export const getStaticProps: GetStaticProps = async () => {
  const modelList = Object.values(dataModels)
  return {
    props: {
      modelList,
    },
  }
}

const HomePage = ({ modelList }: { modelList: TModel[] }) => {
  return (
    <Layout>
      <Header as="h1" textAlign="center" style={{ margin: '3rem' }}>
        3D Models - Animations
      </Header>
      <ModelList modelList={modelList} />
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

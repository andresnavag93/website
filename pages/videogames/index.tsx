import React from 'react'
import Link from 'next/link'
import { Image, Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProjectList from '@components/ProjectList/ProjectList'
import allData from '../../database/data'

export const getStaticProps: GetStaticProps = async () => {
  const projectList = Object.values(allData)
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
        Video Games (AR) Portfolio
      </Header>
      <ProjectList projects={projectList} />
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

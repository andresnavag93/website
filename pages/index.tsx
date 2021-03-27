import React from 'react'
import Link from 'next/link'
import { Image, Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProjectList from '@components/ProjectList/ProjectList'
import allData from '../database/data'

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
      {/* <KawaiiHeader /> */}
      <Header as="h1" textAlign="center" style={{ margin: '3rem' }}>
        Andres Navarro <br /> Portfolio
      </Header>
      {/* <section>
        <Link href="/yes-or-no">
          <a>¿Tendras un excelente dia hoy?</a>
        </Link>
      </section> */}
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

import React from 'react'
import Link from 'next/link'
import { Image, Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProjectList from '@components/ProjectList/ProjectList'

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch('http://localhost:3000/api/project')
  const response = await fetch('https://andresnavag93.vercel.app/api/project')
  const { data: projectList }: TAPIProjectResponse = await response.json()

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

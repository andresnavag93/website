/* import React from 'react'
import { Image, Header, Card, Label } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import AboutMe from '@components/AboutMe/AboutMe'
import { dataAndres } from '../database/data'

const HomePage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center" style={{ margin: '4rem' }}>
          {dataAndres['HOME-andres-navarro'].title}
        </Header>
        <figure>
          <Image
            style={{ border: '1px solid' }}
            src="/images/about/perfil.jpg"
            alt="About me"
            size="medium"
            circular
            centered
            bordered
            black
          />
        </figure>
        <AboutMe {...dataAndres['HOME-andres-navarro']} />
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
 */

import React from 'react'
import { Header } from 'semantic-ui-react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProjectList from '@components/ProjectList/ProjectList'
import { dataFullStack } from '../database/dataFullStack'

export const getStaticProps: GetStaticProps = async () => {
  const projectList = Object.values(dataFullStack)
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
        Web Development
      </Header>
      <ProjectList projects={projectList} />
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

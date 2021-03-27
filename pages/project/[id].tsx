import React from 'react'
import Layout from '@components/Layout/Layout'
import ProjectSummary from '@components/ProjectSummary/ProjectSummary'
import { GetStaticPaths, GetStaticProps } from 'next'
import allData from '../../database/data'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = Object.values(allData)
  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allData[`${params?.id}`]

  // Pass post data to the page via props
  return { props: { project } }
}

const ProjectPage = ({ project }: { project: TProject }) => {
  return (
    <Layout>
      {project == null ? null : <ProjectSummary project={project} />}
    </Layout>
  )
}

export default ProjectPage

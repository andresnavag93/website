import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProjectSummary from '@components/ProjectSummary/ProjectSummary'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch('http://localhost:3000/api/project')
  const response = await fetch('https://andresnavag93.vercel.app/api/avo')
  const { data }: TAPIProjectResponse = await response.json()

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
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const response = await fetch(
  //   `http://localhost:3000/api/project/${params?.id}`
  // )
  const response = await fetch(
    `https://andresnavag93.vercel.app/api/avo/${params?.id}`
  )
  const project = await response.json()

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

import { GraphQLClient, gql } from 'graphql-request'


export const getPosts = async () => {

  const endpoint = 'https://api-us-east-1.graphcms.com/v2/cktvcfldp185x01z5cwmvfuya/master'

  // 'https://api-us-east-1.graphcms.com/v2/cks3pbqd761pn01yy81nl3mu1/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        title
        date
        excerpt
        slug
        coverImage {
          url
          width
          height
        }
        author {
          id
          name
          avatar {
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)

}

export const getPost = async (slug) => {

  const endpoint = 'https://api-us-east-1.graphcms.com/v2/cktvcfldp185x01z5cwmvfuya/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query posts($slug: String!) {
      posts(where: {slug: $slug}) {
        title
        slug
        id
        date
        content {
          json
        }
        coverImage {
          url
          width
          height
        }
        author {
          name
          avatar {
            url
            width
            height
          }
        }
      }
    }
  `

  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables)

}

export const getPostsSlugs = async () => {

  const endpoint = 'https://api-us-east-1.graphcms.com/v2/cktvcfldp185x01z5cwmvfuya/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)

}
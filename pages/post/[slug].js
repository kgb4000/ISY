import styled from 'styled-components'
import Link from 'next/link'
import { getPost, getPostsSlugs } from '../../lib/data'

import { RichText } from '@graphcms/rich-text-react-renderer'

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split('/').pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}


export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: {
      post: post.posts[0]
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug }})),
    fallback: false
  }
}

export default function Home({ post }) {

  return (
    <>
      <Main>
        <div className="container">
          <img
            src={post.coverImage.url} 
            alt={post.title}
            // width={post.coverImage.width}
            // height={post.coverImage.height}
            />
          <h2>{post.title}</h2>
          <div className="author">
            <div className='image-container'>
              <img 
                // loader={GraphCMSImageLoader}
                src={post.author.avatar.url} 
                alt={post.title}
                // width={post.author.avatar.width}
                // height={post.author.avatar.height}
                />
              </div>
            <p>{post.author.name}</p>
            <p>{post.date}</p>
          </div>
          <RichText content={post.content.json} />
          <Link href="/">
            <a>
              <div className="box">
                <div className="btn"> &#x2190; Back</div>
              </div>
            </a>
          </Link>
        </div>
      </Main>
    </>
  )
}

const Main = styled.main`

  .author {
    display: flex;
    align-items: center;

    p {
      margin-left: 1rem;
    }
  }

`



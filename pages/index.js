import styled from 'styled-components'
import Link from 'next/link'
import { getPosts } from '../lib/data'

export const getStaticProps = async () => {

  const data = await getPosts()

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Main>
        <div className="container">
            {data.posts.map((post) => (
            <div key={post.slug}>
              <PostCard>
                <Link href={`/post/${post.slug}`}>
                  <a>
                    <img
                      src={post.coverImage.url} 
                      alt={post.title}
                      
                      />
                    <h2>{post.title}</h2>
                  </a>
                </Link>
                <div className="author">
                  <div className='image-container'>
                    <img 
                      className="avatar"
                      src={post.author.avatar.url} 
                      alt={post.title}
                      />
                    </div>
                    <p>{post.author.name}</p>
                    <p>{post.date}</p>
                  </div>
                <p>{post.excerpt}</p>
                <Link href={`/post/${post.slug}`}>
                  <a>
                    <div className="box">
                      <div className="btn">Read more</div>
                    </div>
                  </a>
                </Link>
              </PostCard>
              <div className="sidebar">
              </div>
            </div>
            ))}
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

const PostCard = styled.section`
  margin-bottom: 2rem;
`
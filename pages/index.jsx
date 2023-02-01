import Head from "next/head"
import Link from "next/link"
import { getPosts} from "../lib/posts"


export const getStaticProps = async ()=> {
  
  const posts = await getPosts() 
   return {
     props: {
       posts
     }
   }
 } 

function HomePage({posts}){

  return (
    <>
    <Head>
      <title>
        My Blog
      </title>
    </Head>
      <h1> My Blog</h1>
      <ul>
        {posts && posts.map(post=> (
          <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
        ))}
      </ul>

    </>
  )
}

export default HomePage
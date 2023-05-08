import type { AppProps } from 'next/app';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
//TEST
import { gql } from "@apollo/client";
import client from "../../../apollo-client";




const Post: NextPage = (
    // {post}:any
    ) => {
    const router = useRouter();
    const { slug } = router.query;
    return <h1>Hi mom
        {/* {post.title} */}
        </h1>
    //return <Component {...pageProps} />
}

export async function getStaticProps(props:any) {
    console.log("props", props)
    const { slug } = props.params;
    const { data } = await client.query({
      query: gql`
      query MyQuery {
        getPost(_id: "${slug.slice(slug.length - 36)}") {
          accountId
          _id
          slug
          title
        }
      }
      `,
    });
   
    return {
   
      props: {
  
        post: data.getPost,
      },
   };
  }

  export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const { data } = await client.query({
        query: gql`
        query MyQuery {
            listPosts {
              items {
                title
                slug
                _id
              }
            }
          }
        `,
      });
      const paths = data.listPosts.items.map((post:any) => ({
        params: { slug: post.slug + "-" + post._id, title: post.title},
      }));
    return {
        paths, 
        fallback: false //indicates the type of fallback
    }
}

export default Post;
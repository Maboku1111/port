import { client } from '../../tina/__generated__/client';

const postsResponse = await client.queries.postConnection();
const posts = postsResponse.data.postConnection.edges.map((post) => {
    console.log(post);
    return { slug: post.node._sys.filename };
})  

export default function Blog() {
    
}
import { client } from '../../tina/__generated__/client';
import { TextReveal } from "./magicui/text-reveal";
import { useEffect, useState } from 'react';

const Blog = () => {  
    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getBlogPosts(); // Call the function
            console.log(data);
            setBlogPost(data || []); // Store in state
        }
        fetchData();
    }, []);

    return (
        <div>
            <TextReveal>See My Blog Posts Below</TextReveal>
            <ul >
                {blogPost.map((post) => (
                    <li key={post.slug}>
                        <h2>{post.title}</h2>  
                        <p><strong>By:</strong> {post.author}</p>
                        {post.map(post => <p>{post.body}</p>)}  
                        <p>{post.body}</p>  
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

async function getBlogPosts() {
    const blogPostsResponse = await client.queries.blogConnection();
    console.log("Response from TinaCMS:", blogPostsResponse); // Debugging line

    if (!blogPostsResponse?.data?.blogConnection?.edges) {
        console.error("Invalid response structure:", blogPostsResponse);
        return [];
    }

    return blogPostsResponse.data.blogConnection.edges.map((blogPost) => ({
        slug: blogPost.node._sys.filename,
        title: blogPost.node.title,  // Extract title
        author: blogPost.node.author, // Extract author
        body: blogPost.node.body,  // Extract body content
    }));
}


export default Blog;
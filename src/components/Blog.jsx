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
                        <strong>{post.slug}</strong>
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
        slug: blogPost.node._sys.filename
    }));
}


export default Blog;
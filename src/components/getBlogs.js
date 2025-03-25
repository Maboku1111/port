import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

function getBlogPosts() {
  const files = fs.readdirSync(blogDirectory)

  return files.map((filename) => {
    const filePath = path.join(blogDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      ...data,
      slug: filename.replace('.mdx', ''),
    }
  })
}

export default function handler(req, res) {
  const posts = getBlogPosts();
  res.status(200).json(posts);
}


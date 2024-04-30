import { blogs } from "../data"
import BlogCard from "./BlogCard"

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Blog</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Latest from our blog</h2>
            <p className="text-base">In this guide, we're going to share the essential SEO ranking factors you need to dominate search. By the end of this post, you'll have a well-optimized site</p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
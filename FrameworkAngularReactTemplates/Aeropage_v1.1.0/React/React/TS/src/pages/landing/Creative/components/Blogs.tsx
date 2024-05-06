import { blogs } from "../data"
import BlogCard from "./BlogCard"

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Blog</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Read the latest news.</h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Blogs
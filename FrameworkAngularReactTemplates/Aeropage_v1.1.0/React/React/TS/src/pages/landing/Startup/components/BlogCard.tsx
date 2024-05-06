import { LuMoveRight } from "react-icons/lu"
import { Link } from "react-router-dom"
import type { BlogType } from "../types"

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="rounded-md border border-default-200 p-6">
      <div className="grid items-center gap-6 sm:grid-cols-5">
        <div className="col-span-2">
          <img src={blog.image} className="my-auto h-full w-full rounded-md" />
        </div>
        <div className="group sm:col-span-3">
          <h3 className="mb-4 text-2xl font-medium text-default-950">
            {blog.title}
          </h3>
          <p className="mb-5 mt-3 text-sm">
            {blog.description}
          </p>
          <Link to="" className="text-lg font-medium text-default-950">Read More
            <LuMoveRight className="inline-block size-5 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
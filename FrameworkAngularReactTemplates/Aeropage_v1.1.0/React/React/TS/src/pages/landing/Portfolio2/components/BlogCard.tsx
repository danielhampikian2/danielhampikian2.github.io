import { Link } from "react-router-dom"
import { BlogType } from "../types"
import { LuCalendarDays } from "react-icons/lu"

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-default-200">
      <img src={blog.image} />
      <div className="p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LuCalendarDays className="size-5 text-default-950" />
            <p className="text-base text-default-950">{blog.date}</p>
          </div>
          <p className="text-base text-default-950">Branding</p>
        </div>
        <Link to="">
          <h2 className="mt-3 text-2xl font-medium text-default-950">
            {blog.title}
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import type { BlogType } from "../types";

const BlogCard = ({ blog }: { blog: BlogType; }) => {
  return (
    <div className="p-6 border border-default-200 rounded-md">
      <div className="grid sm:grid-cols-5 gap-6 items-center">
        {!blog.isImageRight && <div className="col-span-2">
          <img src={blog.image} className="rounded-md my-auto h-full w-full" />
        </div>}
        <div className="sm:col-span-3 group">
          <h3 className="text-3xl font-medium text-default-950 mb-4 mt-3">{blog.title}</h3>
          <p className="text-base mb-5 mt-3">{blog.description}</p>
          <Link to="" className="text-default-950 text-lg font-medium">Read More
            <LuMoveRight className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
          </Link>
        </div>
        {blog.isImageRight && <div className="col-span-2">
          <img src={blog.image} className="rounded-md my-auto h-full w-full" />
        </div>}
      </div>
    </div>
  );
};

export default BlogCard;

import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg border border-default-200 overflow-hidden">
      <div className="p-6 group">
        <div className="relative rounded-md overflow-hidden">
          <img src={blog.image} className="rounded-md" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="flex gap-5 mt-6">
          <div>
            <h2 className="text-3xl font-medium text-default-950">{blog.no}</h2>
            <p className="text-lg  uppercase text-default-800">Sep</p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-default-950">
              {blog.title}
            </h2>
            <p className="text-base  mt-3 mb-5">{blog.description}</p>
            <Link to="" className="text-default-950 text-lg">
              Read More
              <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

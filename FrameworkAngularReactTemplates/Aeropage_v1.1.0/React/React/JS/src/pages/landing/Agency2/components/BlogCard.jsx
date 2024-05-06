import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const BlogCard = ({ blog }) => {
  return (
    <div className="border border-default-200 rounded-lg overflow-hidden">
      <div className="flex flex-col">
        <div>
          <img src={blog.image} className="max-w-full h-full" />
        </div>
        <div className="group p-6">
          <h3 className="text-xl font-medium text-default-950 mb-4">
            {blog.title}
          </h3>
          <p className="text-base mb-5 mt-3">{blog.description}</p>
          <Link to="" className="text-default-950 text-lg font-medium">
            Read More
            <LuMoveRight className="group-hover:opacity-100 opacity-0  w-5 h-5 inline-block transition-all duration-400 group-hover:translate-x-2 will-change-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

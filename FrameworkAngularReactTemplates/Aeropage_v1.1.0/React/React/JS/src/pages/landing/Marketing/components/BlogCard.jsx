import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-md border border-default-200 overflow-hidden">
      <div className="group">
        <img src={blog.image} />
        <div className="p-6">
          <h2 className="text-lg font-medium text-default-950 mb-5">
            {blog.title}
          </h2>
          <Link to="" className="text-default-900 text-lg font-medium">
            Read More
            <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

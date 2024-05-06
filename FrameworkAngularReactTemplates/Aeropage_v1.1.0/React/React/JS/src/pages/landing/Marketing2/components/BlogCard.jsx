import { LuCalendarDays, LuMessageSquare } from "react-icons/lu";

const BlogCard = ({ blog }) => {
  const { date, image, title, type, description } = blog;
  return (
    <div className="p-6 border border-default-200 rounded-lg overflow-hidden">
      <div className="relative group overflow-hidden">
        <div className="overflow-hidden rounded-md">
          <img
            src={image}
            className="h-full w-full scale-[1.2] group-hover:scale-[1] transition-all duration-700"
          />
        </div>
        <div className="flex items-center gap-5 mt-6">
          <div className="flex items-center gap-3 group">
            <LuCalendarDays className="h-5 w-5 text-default-300 group-hover:text-primary transition-all duration-700 " />
            <p className="text-base text-default-950">{date}</p>
          </div>
          <div className="flex items-center gap-3 group">
            <LuMessageSquare className="h-5 w-5 text-default-300 group-hover:text-primary transition-all duration-700 " />
            <p className="text-base text-default-950">{type}</p>
          </div>
        </div>
        <h2 className="text-xl font-medium text-default-950 mt-4 group-hover:underline transition-all duration-700">
          {title}
        </h2>
        <p className="text-base mt-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;

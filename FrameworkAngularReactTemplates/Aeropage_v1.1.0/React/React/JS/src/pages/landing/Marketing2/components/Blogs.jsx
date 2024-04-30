import { blogs } from "../data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Our Bolg
          </span>
          <h2 className="text-4xl/tight font-medium text-default-950 mt-4">
            Explore Our Blog
          </h2>
          <p className="text-lg mt-5">
            Discover top-notch marketing resources and stay updated with the
            latest news about our company.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

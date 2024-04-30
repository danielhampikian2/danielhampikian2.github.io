import { Link } from "react-router-dom";
import {
  LuClapperboard,
  LuLayers,
  LuMoveRight,
  LuShield,
  LuUserCheck2,
} from "react-icons/lu";

import ebook1 from "@/assets/images/landing/ebook/img-1.jpg";

const Benefits = () => {
  return (
    <section id="benefits" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Benefits
          </span>
          <h2 className="md:text-4xl/tight text-4xl font-medium text-default-950 my-5">
            Discover your Benefits
          </h2>
          <p className="text-base mb-10">
            Plus, enjoy the convenience of offline access to our ebooks,
            allowing you to read at your convenience, anytime, and anywhere.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
          <div className="space-y-6">
            <div>
              <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <LuClapperboard className="size-7 text-primary" />
                </div>
                <h2 className="text-2xl font-medium text-default-950 mt-5">
                  Cost-Effective Option
                </h2>
                <p className="text-base  mt-3">
                  Ebooks typically come at a lower price point compared to
                  printed books, making them accessible to a broader audience of
                  readers.
                </p>
                <div className="mt-5">
                  <Link to="" className="text-default-900 text-lg font-medium">
                    Read More
                    <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <LuShield className="size-7 text-primary" />
                </div>
                <h2 className="text-2xl font-medium text-default-950 mt-5">
                  Eco-Conscious Choice
                </h2>
                <p className="text-base mt-3">
                  Ebooks are environmentally friendly as they are digital,
                  eliminating the need for paper, ink, and sustainable option
                  compared to print books.
                </p>
                <div className="mt-5">
                  <Link to="" className="text-default-900 text-lg font-medium">
                    Read More
                    <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-shadow-md bg-white rounded-xl">
            <img src={ebook1} className="h-full w-full rounded-xl" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <LuLayers className="size-7 text-primary" />
                </div>
                <h2 className="text-2xl font-medium text-default-950 mt-5">
                  Enhanced Visibility
                </h2>
                <p className="text-base  mt-3">
                  Ebooks can be effortlessly searched and shared across the
                  internet, readers and enabling readers to discover new books
                  more readily.
                </p>
                <div className="mt-5">
                  <Link to="" className="text-default-900 text-lg font-medium">
                    Read More
                    <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <LuUserCheck2 className="size-7 text-primary" />
                </div>
                <h2 className="text-2xl font-medium text-default-950 mt-5">
                  Enhanced Convenience
                </h2>
                <p className="text-base  mt-3">
                  Ebooks have the capacity to incorporate interactive features
                  like videos, audio, and elevating the overall reading
                  experience.
                </p>
                <div className="mt-5">
                  <Link to="" className="text-default-900 text-lg font-medium">
                    Read More
                    <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to=""
            className="inline-flex items-center justify-center gap-2 text-base py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-500"
          >
            Read More
            <LuMoveRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

import finance8 from "@/assets/images/landing/finance/img-8.png";

const Feature1 = () => {
  return (
    <section id="features" className="pt-10 lg:pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Highlighted Projects
            </span>
            <h2 className="text-4xl/tight font-medium text-default-950 mt-4">
              Streamline Data Integrations: Simplify finance with Vault
            </h2>
            <p className="text-base text-default-900 mt-5">
              Save time on financial tasks by automating them with Vault.
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <div className="group mt-5">
              <Link
                to=""
                className="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Read More
                <LuMoveRight className="w-6 h-6 inline-block" />
              </Link>
            </div>
          </div>
          <div>
            <img src={finance8} className="h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;

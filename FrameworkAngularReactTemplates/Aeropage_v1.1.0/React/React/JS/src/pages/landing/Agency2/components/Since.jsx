import { allReviews } from "../data";
import ReviewCard from "./ReviewCard";

const Since = () => {
  return (
    <section className="relative xl:py-0 lg:py-20 py-10">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 items-center relative">
          <div className="mx-auto">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Since From
            </span>
            <h1 className="md:text-5xl/tight text-4xl font-medium text-default-950 max-w-lg my-4">
              Keep pushing forward. We've got your back.
            </h1>
            <p className="max-w-md md:text-lg">
              Thing go wrong have questions. We've understand. So we have people
            </p>
            <div className="flex flex-wrap items-center gap-16 mt-10">
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-medium text-default-950">10k</h2>
                <p className="text-base">
                  Happy Users <br />
                  Around World
                </p>
              </div>
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-medium text-default-950">120k</h2>
                <p className="text-base">
                  Projects <br />
                  Already Done
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto h-[600px] overflow-hidden relative">
            <div className="marquee">
              <div className="relative gap-6 m-auto flex flex-col overflow-hidden">
                <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                  {allReviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full"
                >
                  {allReviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Since;

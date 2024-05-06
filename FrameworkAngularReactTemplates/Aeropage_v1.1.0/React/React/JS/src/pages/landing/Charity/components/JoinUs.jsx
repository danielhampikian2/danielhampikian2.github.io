import charity2 from "@/assets/images/landing/charity/img-2.jpg";
import charity4 from "@/assets/images/landing/charity/img-4.jpg";
import charity5 from "@/assets/images/landing/charity/img-5.jpg";
import { LuPlay } from "react-icons/lu";

const JoinUs = () => {
  return (
    <>
      <section id="join" className="py-10 lg:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Starting with a Child
            </span>
            <h2 className="text-3xl/snug font-medium text-default-950 mt-4">
              Starting with a Child{" "}
            </h2>
            <p className="text-base mt-5">
              Children growing up in poverty encounter significant challenges
              education and healthcare, social discrimination, and isolation.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="relative h-full group">
                  <img src={charity4} className="h-full w-full rounded-xl" />
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
                      <button
                        className="relative h-20 w-20 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-7 w-7 stroke-white fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="relative group">
                  <img src={charity5} className="rounded-xl" />
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
                      <button
                        className="relative h-14 w-14 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-5 w-5 stroke-white fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <img src={charity2} className="rounded-xl" />
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
                      <button
                        className="relative h-14 w-14 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-5 w-5 stroke-white fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="watchvideomodal"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-in-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="flex flex-col w-full pointer-events-auto rounded-xl overflow-x-hidden">
            <iframe
              className="w-full"
              height={400}
              src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;

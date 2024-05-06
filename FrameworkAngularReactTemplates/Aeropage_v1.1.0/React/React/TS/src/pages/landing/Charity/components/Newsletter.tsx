import { LuMoveRight } from "react-icons/lu"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import charity3 from "@/assets/images/landing/charity/img-3.jpg"
import { useForm } from "react-hook-form";
import { TextFormInput } from "@/components";

const Newsletter = () => {
  const newsLetterFormSchema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newsLetterFormSchema),
  });
  return (
    <section className="relative py-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${charity3})` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 relative">
          <h2 className="text-4xl/snug font-medium text-white mt-4">Stay Informed by Subscribing to Our Newsletter</h2>
          <p className="text-base text-white/80 mt-5">Receive instant news by subscribing to our daily newsletter.</p>
          <form onSubmit={handleSubmit(() => { })} className="space-y-2 mt-6 max-w-xl mx-auto">
            <TextFormInput
              name="email"
              type="email"
              className="h-12 w-full rounded-full  bg-default-50 py-4 pe-16 ps-4 text-default-950"
              control={control}
              placeholder="Type Your Email"
              endButton={<button type="submit" className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 rounded-full text-white bg-primary hover:bg-primary-700 transition-all">
                <LuMoveRight className="h-6 w-6" />
              </button>}
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
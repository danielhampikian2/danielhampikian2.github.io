import { LuMoveRight } from "react-icons/lu"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { TextFormInput } from "@/components";

const Contact = () => {
  const contactFormSchema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    name: yup.string().required("Please enter your name"),
    subject: yup.string().required("Please enter your subject name"),
    requirement: yup.string().required("Please enter your requirements"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  return (
    <section className="py-10 lg:py-20 bg-default-100 dark:bg-default-50 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <h2 className="md:text-4xl text-3xl font-medium text-default-950">Assisting you in securing a competitive advantage</h2>
            <p className="text-default-600 text-base font-medium my-5">Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu. Consectetur cras vitae orci.</p>
            <Link to="" className="inline-flex items-center justify-center h-10 px-4 bg-primary/20 text-primary rounded-md hover:bg-primary hover:text-white transition-all">
              <LuMoveRight className="h-6 w-6" />
            </Link>
          </div>
          <div className="p-8 rounded-lg">
            <div className="p-6 rounded-md bg-white dark:bg-default-100">
              <h3 className="text-2xl font-medium text-default-950">Feel free to get in touch with us!</h3>
              <p className="text-base mt-3">Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu.</p>
              <form onSubmit={handleSubmit(() => { })} className="space-y-4 mt-6">
                <TextFormInput
                  name="name"
                  label="Name"
                  labelClassName="text-default-950"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  placeholder="Your Name"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="email"
                  label="Email"
                  type="email"
                  labelClassName="text-default-950"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  placeholder="Type Your email"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="subject"
                  label="Subject"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  labelClassName="text-default-950"
                  placeholder="Your message subject"
                  control={control}
                  fullWidth
                />
                <button type="submit" className="px-6 py-2 text-lg rounded text-white bg-black">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import charity11 from '@/assets/images/landing/charity/img-11.jpg';
import { TextFormInput } from '@/components';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const Contact = () => {
  const contactFormSchema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    fName: yup.string().required("Please enter your first name"),
    class: yup.string().required("Please enter your class name"),
    requirement: yup.string().required("Please enter your requirements"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="container">
        <div className="relative z-20">
          <div className="hidden xl:block">
            <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:-z-10 before:bg-[url('../images/other/dot.svg')]" />
            <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:bg-[url('../images/other/dot.svg')]" />
          </div>
          <div className="grid xl:grid-cols-2 gap-6">
            <div className="relative group">
              <img src={charity11} className="h-full w-full rounded-xl" />
              <div className="absolute inset-0 rounded-xl ">
                <div className="flex items-end justify-center h-full">
                  <div className="max-w-md mx-auto text-center bg-white/10 backdrop-blur-xl p-4 m-6 rounded-xl">
                    <h2 className="text-4xl/snug font-medium text-white">Would you like to support our mission?</h2>
                    <p className="text-base  text-white/80 mt-5">Complete the form and become a part of our community.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-8 rounded-md bg-default-100 dark:bg-default-50">
                <form onSubmit={handleSubmit(() => { })} className="relative">
                  <h2 className="text-2xl font-medium text-default-950">Join Us Today!</h2>
                  <div className="space-y-6 my-6">
                    <TextFormInput
                      name='fName'
                      placeholder="Your first name..."
                      control={control}
                      className='rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50'
                      fullWidth
                    />
                    <TextFormInput
                      name='email'
                      placeholder="Your email..."
                      control={control}
                      className='rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50'
                      fullWidth
                    />
                    <TextFormInput
                      name='class'
                      placeholder="Studying Class"
                      control={control}
                      className='rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50'
                      fullWidth
                    />
                    <TextFormInput
                      name='requirement'
                      placeholder="Type Your Requirements"
                      control={control}
                      className='rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50'
                      fullWidth
                    />
                  </div>
                  <button type="submit" className="py-3 w-full flex items-center justify-center rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
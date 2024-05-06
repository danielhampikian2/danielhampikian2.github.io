import { TextAreaFormInput, TextFormInput } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import * as yup from "yup";

const ContactUs = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    subject: yup.string().required("Please enter your subject"),
    message: yup.string().required("Please enter your message"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Our Contact Us
          </span>
          <h2 className="text-4xl/tight font-medium text-default-950 mt-4">
            Let's Begin a Dialogue
          </h2>
          <p className="text-lg mt-5">
            We're eager to engage with like-minded individuals. Simply greet us,
            and we'll embark on a productive collaboration. Launch your own
            journey to success.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-16">
          <div>
            <div className="p-8 rounded-md bg-default-50 border border-default-200">
              <form onSubmit={handleSubmit(() => {})} className="relative">
                <h2 className="text-2xl font-medium text-default-950 mb-5">
                  We welcome your feedback
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <TextFormInput
                    name="name"
                    label="Name"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your first name..."
                    fullWidth
                    control={control}
                  />
                  <TextFormInput
                    name="email"
                    label="Email"
                    type="email"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your email..."
                    fullWidth
                    control={control}
                  />

                  <div className="sm:col-span-2">
                    <TextFormInput
                      name="subject"
                      label="Subject"
                      labelClassName="text-default-500"
                      className="bg-default-50 px-3 text-sm"
                      placeholder="Type subject..."
                      containerClassName="mb-3"
                      fullWidth
                      control={control}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextAreaFormInput
                      name="message"
                      label="Messages"
                      labelClassName="text-default-500"
                      className="bg-default-50 px-3 text-sm"
                      rows={4}
                      placeholder="Type messages..."
                      containerClassName="mb-4"
                      control={control}
                      fullWidth
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-2 px-6 flex items-center rounded-md text-white bg-primary/90 hover:bg-primary transition-all"
                >
                  Send Messages <LuSend className="h-5 w-5 rotate-45 ms-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import { LuLineChart, LuMail, LuPhone, LuSave } from "react-icons/lu"

const Contact = () => {
  return (
    <section id="contact" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center">
              <LuPhone className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-default-950 mt-5">Call Me</h4>
            <p className="text-base  text-default-800 mt-1">+0088 66956 66</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center">
              <LuMail className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-default-950 mt-5">Email me</h4>
            <p className="text-base  text-default-800 mt-1">Dgnr@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center">
              <LuLineChart className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-default-950 mt-5">Flow Me</h4>
            <p className="text-base  text-default-800 mt-1">Facebook.com</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center">
              <LuSave className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-default-950 mt-5">My Work</h4>
            <p className="text-base  text-default-800 mt-1">Coderthemes.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
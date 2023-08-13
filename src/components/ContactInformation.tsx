import { BsPhone, BsEnvelopeAt } from "react-icons/bs";

import Cycle from "../assets/cycle.png";

const ContactInformation = () => {
  return (
    <div className="min-w-[480px] bg-[#CFDFFF] bg-opacity-80 rounded-lg shadow-md p-7 relative">
      <h3 className="heading-2   md:text-center text-start mb-3 lg:px-0 sm:px-5 px-2">
        Contact Information
      </h3>
      <div className="max-w-[395px] mx-auto ">
        <p className="paragraph-2 text-center mb-5 ">
          Simply fill out the form, and our dedicated team will reach out to you
          within 24 hours.
        </p>
        <div className="flex flex-col items-start gap-7">
          <div className="w-full flex items-center gap-7 h-auto ">
            <div className=" w-12 flex items-center justify-center">
              <BsPhone size={45} />
            </div>
            <a href="tel:+959964470356" className="paragraph">
              +95 964 470 356
            </a>
          </div>
          <div className="w-full flex items-center gap-7 h-auto  ">
            <div className="w-12 flex items-center justify-center">
              <BsEnvelopeAt size={35} />
            </div>
            <a href="mailto:dennykate22@gmail.com" className="paragraph">
              dennykate22@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="w-[160px] absolute bottom-0 right-0 ">
        <img src={Cycle} alt="cycle" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactInformation;

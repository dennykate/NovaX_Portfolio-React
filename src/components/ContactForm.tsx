import { useState } from "react";
import { Checkbox, Input, Textarea } from ".";
import { contactFormData, platformsData } from "../constants";
import { FormProps } from "../types";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormProps>({
    first_name: "",
    last_name: "",
    mail: "",
    phone: "",
    message: "",
  });
  const [platforms, setPlatforms] = useState<string[]>([]);

  const onClickHandler = async () => {};

  return (
    <div className="w-full pt-7 pb-4 md:px-4 px-1 bg-opacity-70">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 w-full">
        {contactFormData.map((data, i: number) => (
          <Input
            key={i}
            data={data}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>

      <p className="text-[16px] font-[400] text-dark-blue text-center my-7 text-opacity-90">
        We are curious to know what developments you need and find interesting.
        Share your thoughts with us!
      </p>

      <div className="flex items-center gap-5 mb-7 flex-wrap">
        {platformsData.map((data, i: number) => (
          <Checkbox
            key={i}
            data={data}
            platforms={platforms}
            setPlatforms={setPlatforms}
          />
        ))}
      </div>

      <Textarea formData={formData} setFormData={setFormData} />

      <div className="mt-7  w-full flex justify-end items-center">
        <button className="px-5 py-2 border border-dark-blue rounded-full text-[16px] font-[300] text-dark-blue shadow-lg bg-transparent hover:bg-dark-blue hover:text-white transition-300">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { Checkbox, Input, Textarea } from ".";
import { contactFormData, platformsData } from "../constants";
import { FormProps } from "../types";
import { keyParser } from "../utils";
import config from "../constants/config";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormProps>({
    first_name: "",
    last_name: "",
    mail: "",
    phone: "",
    message: "",
    platforms: [],
  });
  const [platforms, setPlatforms] = useState<string[]>([]);

  const onClickHandler = async () => {
    formData.platforms = platforms;
    const isValidated: boolean = formValidation();
    if (!isValidated) return;

    const emailFormData = {
      name: formData.first_name + " " + formData.last_name,
      phone: formData.phone,
      mail: formData.mail,
      message: formData.message,
      platforms: formData.platforms.join(","),
    };

    emailjs
      .send(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        emailFormData,
        config.PUBLIC_KEY
      )
      .then(() => {
        toast.success("success");
        resetFrom();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const formValidation = (): boolean => {
    let isValidated: boolean = true;

    Object.keys(formData)
      .reverse()
      .forEach((key: string) => {
        const keyName = key as keyof FormProps;
        if (
          (isValidated && formData[keyName] == "") ||
          formData[keyName].length == 0
        ) {
          toast.error(`missing ${keyParser(keyName)}`);
          isValidated = false;
        }
      });

    return isValidated;
  };

  const resetFrom = (): void => {
    Object.keys(formData).forEach((key: string) => {
      const keyName = key as keyof FormProps;
      if (Array.isArray(formData[keyName])) {
        formData[keyName] = [] as any;
      } else {
        formData[keyName] = "" as any;
      }
    });
  };

  return (
    <div className="w-full pt-7 pb-4 md:px-4 px-1 bg-opacity-70">
      <Toaster />

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
        <button
          onClick={onClickHandler}
          className="px-5 py-2 border border-dark-blue rounded-full text-[16px] font-[300] text-dark-blue shadow-lg bg-transparent hover:bg-dark-blue hover:text-white transition-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

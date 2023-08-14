import { FormProps } from "../types";

type TextareaDataProps = {
  formData: FormProps;
  setFormData: (formData: FormProps) => void;
};

const Textarea = ({ formData, setFormData }: TextareaDataProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start w-full">
        <label
          htmlFor="message"
          className="text-[16px] font-[400] text-dark-blue text-opacity-90"
        >
          Message
        </label>
        <textarea
          onChange={onChangeHandler}
          id="message"
          rows={3}
          placeholder="Write Message"
          className="py-2 border-b-[2px] outline-none border-b-dark-blue w-full border-opacity-90 font-open-sans text-[15px] placeholder:text-gray-400 placeholder:text-[15px] bg-transparent"
        >
          {formData.message}
        </textarea>
      </div>
    </div>
  );
};

export default Textarea;

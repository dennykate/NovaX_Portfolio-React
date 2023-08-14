import { FormProps, InputProps } from "../types";

type InputDataProps = {
  data: InputProps;
  formData: FormProps | any;
  setFormData: (formData: FormProps) => void;
};

const Input = ({ data, formData, setFormData }: InputDataProps) => {
  const id = data.label.toLowerCase().split(" ").join("_");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <label
        htmlFor={id}
        className="text-[16px] font-[400] text-dark-blue text-opacity-90"
      >
        {data.label}
      </label>
      <input
        id={id}
        name={id}
        value={formData[id]}
        onChange={onChangeHandler}
        type="text"
        className="py-2 border-b-[2px] outline-none border-b-dark-blue w-full border-opacity-90 font-open-sans text-[15px] bg-transparent"
      />
    </div>
  );
};

export default Input;

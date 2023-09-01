export interface NavbarItemProps {
  name: string;
  link: string;
}

export interface CardProps {
  image: string;
  name: string;
  description: string;
}

export interface WorkCardProps {
  image: string;
  name: string;
}

export interface InputProps {
  label: string;
  id: string;
}

export interface CheckboxProps {
  name: string;
}

export interface FormProps {
  first_name: string;
  last_name: string;
  mail: string;
  phone: string;
  message: string;
  platforms: string[];
}

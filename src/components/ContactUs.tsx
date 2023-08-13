import { ContactForm, ContactInformation } from ".";

const ContactUs = () => {
  return (
    <div className="w-full py-[50px] relative">
      <div className="w-full h-full absolute top-0 left-0  wave-bg -z-[10]" />
      <div className="custom-container">
        <h3 className="heading-2 uppercase  md:text-center text-start mb-3 lg:px-0 sm:px-5 px-2">
          Contact Us
        </h3>
        <div className="max-w-[840px] mx-auto mb-5">
          <p className="paragraph-2 text-center ">
            Feel free to ask any questions or share your remarks with us by
            sending a message. We're here to listen!
          </p>
        </div>
        <div className="w-full p-2 rounded-lg shadow-lg flex">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

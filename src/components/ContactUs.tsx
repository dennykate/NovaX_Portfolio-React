import { ContactForm, ContactInformation, WaypointContainer } from ".";

const ContactUs = () => {
  return (
    <WaypointContainer name="contact">
      <div
        id="contact"
        className="w-full py-[50px] relative overflow-hidden pt-[80px]"
      >
        <div className="w-full h-full absolute top-[50px] left-0  wave-bg -z-[10] rotate-[15deg]" />
        <div className="custom-container lg:px-2 sm:px-5 px-2">
          <h3 className="heading-2 uppercase  md:text-center text-start mb-3 ">
            Contact Us
          </h3>
          <div className="w-full mb-5 ">
            <p className="paragraph-2 md:text-center text-start ">
              Feel free to ask any questions or share your remarks with us by
              sending a message. We're here to listen!
            </p>
          </div>
          <div className="w-full p-2 rounded-lg shadow-lg flex gap-2 lg:flex-row flex-col">
            <ContactInformation />
            <ContactForm />
          </div>
        </div>
      </div>
    </WaypointContainer>
  );
};

export default ContactUs;

import {
  ContactUs,
  CustomerBenefits,
  Hero,
  Navbar,
  OurValue,
  ScrollNavbar,
  Services,
  Works,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollNavbar />
      <Hero />
      <OurValue />
      <Services />
      <CustomerBenefits />
      <Works />
      <ContactUs />
    </div>
  );
};

export default App;

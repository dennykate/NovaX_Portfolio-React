import {
  ContactUs,
  CustomerBenefits,
  Footer,
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
      <Footer />
    </div>
  );
};

export default App;

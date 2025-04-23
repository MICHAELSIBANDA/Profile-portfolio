import Experience from "./Experience";
import ContactForm from "./ContactForm";
import Intro from "./Intro";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Content = () => {
  return (
    <div className="md:fixed w-full h-full overflow-y-auto p-10 pt-24">
      <Intro />
      <br />
      <br />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Skills />

      <br />
      <br />
      <ContactForm />
      <br />
      <br />
      
      <br /><br />
    </div>
  );
}

export default Content
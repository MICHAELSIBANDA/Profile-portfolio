import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Intro = () => {
  return (
    <>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase  text-8xl w-[60%] text-white">
        IT Project Manager
      </h1>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase text-8xl w-[60%] text-[#998f8fdf]">
        React Developer
      </h1>

      <p data-aos="fade-up" className="text-[#998F8F] text-lg md:w-[40%] inter-regular">
      Agile-focused IT professional with experience in leading teams, managing projects, 
      and building responsive React interfaces. Skilled in Java, SQL, UML, and frontend 
      technologies. Passionate about delivering high-quality solutions through collaboration,
       continuous improvement, and effective communication across the software development lifecycle.
      </p>
    </>
  );
};

export default Intro;

import Image from "/src/assets/portrait-young-african-american-man.jpg";
import Socials from "./Socials";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Profile = () => {
  return (
    <main
      data-aos="fade-up"
      className="relative min-w-[300px] md:w-[344px] min-h-[500px] md:h-[640px] bg-inherit md:bg-white rounded-lg flex flex-col items-center py-6 justify-start gap-10 overflow-hidden">
      <img
        src={Image}
        className="w-[70%]  md:w-[300px] rounded-lg"
        alt="image"
      />

      <aside className="flex flex-col items-center justify-center w-[450px] h-[450px] border-8 border-dashed border-orange-700 rounded-full absolute -bottom-[90px] -left-50 touch-none pointer-events-none"></aside>

      <h1 className="oswald uppercase text-4xl text-white md:text-black">
        Michael Sibanda
      </h1>

      <p className="text-lg inter-regular w-[90%] text-white md:text-gray-600 text-center">
        An intermediate IT Project Manger (Java, SQL, React, Node) Agile Srum Methodology
        
      </p>

      <Socials />

      <p className="text-sm text-center inter-regular text-white md:text-black">
        Photograph by__
        <a
          href="https://www.tiktok.com/@altihajase"
          target="_blank"
          className="text-orange-600 cursor-pointer">
          Altiha Jase
        </a>
      </p>
    </main>
  );
};

export default Profile;

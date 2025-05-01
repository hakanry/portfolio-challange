import img_1 from "../assets/img_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  return (
    <>
      <div className="flex justify-between py-8 flex-col  xl:flex-row">
        <div className="content-center  flex flex-col gap-8 max-w-full">
          <div className="flex gap-2.5 text-indigo-700 ">
            <div className="grow-1 content-center">
              <hr />
            </div>
            <p className="grow-12">Hakan Reşit YALÇIN</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans font-bold text-7xl text-gray-800 max-sm:text-4xl  max-w-[75%]">
              Creative thinker Minimalism lover
            </p>
            <h1 className="font-sans font-normal text-lg text-gray-500 max-w-[75%] max-sm:max-w-[100%]">
              Hi, I’m Hakan Reşit. I’m a full-stack developer. If you are
              looking for a Developer who to craft solid and scalable frontend
              products with great user experiences. Let’s shake hands with me.
            </h1>
          </div>
          <div className="flex gap-3 max-sm:flex-col ">
            <a href="#">
              {" "}
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-white bg-indigo-800 max-sm:w-full">
                Hire me
              </button>
            </a>
            <a href="https://github.com/hakanry">
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-indigo-800 max-sm:w-full">
                <FontAwesomeIcon icon={faGithub} className="pr-1" />
                Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/hakan-re%C5%9Fit-yal%C3%A7%C4%B1n-5207b4243/">
              <button className="cursor-pointer border rounded-md border-indigo-800 px-8 py-3 text-indigo-800 max-sm:w-full">
                <FontAwesomeIcon icon={faLinkedinIn} className="pr-1" />
                LinkedIn
              </button>
            </a>
          </div>
        </div>
        <img
          className="max-w-[30%] md:max-w-full md:p-12 sm:max-w-full sm:p-12 max-sm:max-w-full max-sm:py-6"
          src={img_1}
        />
      </div>
    </>
  );
}

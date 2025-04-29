import img_1 from "../assets/img_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  return (
    <>
      <div className="flex ">
        <div className="content-center">
          <div className="flex gap-2.5 text-indigo-700 ">
            <div className="grow-1 content-center">
              <hr />
            </div>
            <p className="grow-12">Hakan Reşit YALÇIN</p>
          </div>
          <div>
            <p className="font-sans font-bold text-7xl text-gray-800">
              Creative thinker Minimalism lover
            </p>
            <h1 className="font-sans font-normal text-lg text-gray-500">
              Hi, I’m Almila. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="border rounded-md border-indigo-800 px-8 py-3 text-white bg-indigo-800">
              Hire me
            </button>
            <button className="border rounded-md border-indigo-800 px-8 py-3 text-indigo-800">
              <FontAwesomeIcon icon={faGithub} />
              Github
            </button>
            <button className="border rounded-md border-indigo-800 px-8 py-3 text-indigo-800">
              <FontAwesomeIcon icon={faLinkedinIn} />
              LinkedIn
            </button>
          </div>
        </div>
        <img src={img_1} />
      </div>
    </>
  );
}

import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className=" bg-accent">
        <div
          className={`container ${style.container} py-56 text-white flex flex-col justify-center items-center gap-4`}
        >
          <h2 className="text-4xl font-bold pt-3">ABOUT COMPONENT</h2>
          <div className="mark relative">
            <i className="fa-solid fa-star relative"></i>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="desc1 col-span-12 sm:col-span-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="desc2 col-span-12 sm:col-span-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

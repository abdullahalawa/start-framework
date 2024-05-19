import image from "../../assets/images/svgexport-1.png";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className=" bg-accent">
        <div
          className={`container ${style.container} py-14 text-white flex flex-col justify-center items-center gap-4`}
        >
          <img src={image} alt="image" />
          <h2 className="text-4xl font-bold pt-3">START FRAMEWORK</h2>
          <div className="mark relative">
            <i className="fa-solid fa-star relative"></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

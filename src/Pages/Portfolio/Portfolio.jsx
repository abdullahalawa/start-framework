import style from "./Portfolio.module.css";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className=" bg-white">
        <div
          className={`container ${style.container} py-8 text-white flex flex-col justify-center items-center gap-4`}
        >
          <h2 className="text-main text-4xl font-bold pt-3">
            PORTFOLIO COMPONENT
          </h2>
          <div className="mark relative">
            <i className="fa-solid fa-star text-main relative"></i>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img1}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img2}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img3}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img1}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img2}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className={`ovelay ${style.ovelay} relative`}>
                <i className="fa-solid fa-plus text-7xl absolute rounded-lg h-full w-full flex justify-center items-center transition-all hover:bg-accent/80"></i>
                <img
                  className="cardImage h-auto max-w-full rounded-lg"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

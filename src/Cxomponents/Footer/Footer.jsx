export default function Footer() {
  return (
    <>
      <div className="footer w-full text-white">
        <div className="footer-info  bg-main py-24 ">
          <div className="container  flex sm:flex-row flex-col  sm:gap-4 gap-8">
            <div className="sm:w-1/3 w-full text-center space-y-3">
              <h2 className="text-3xl font-semibold">LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="sm:w-1/3 w-full text-center space-y-3">
              <h2 className="text-3xl font-semibold">AROUND THE WEB</h2>
              <i className="fa-brands fa-facebook border rounded-full p-2 mx-1"></i>
              <i className="fa-brands fa-twitter border rounded-full p-2 mx-1"></i>
              <i className="fa-brands fa-linkedin border rounded-full p-2 mx-1"></i>
              <i className="fa-solid fa-globe border rounded-full p-2 mx-1"></i>
            </div>

            <div className="sm:w-1/3 w-full text-center space-y-3">
              <h2 className="text-3xl font-semibold">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copywrite bg-secondery py-5 text-center">
          <h4>Copyright © Your Website 2024</h4>
        </div>
      </div>
    </>
  );
}

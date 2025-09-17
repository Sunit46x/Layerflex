import Clips from "../utils/Clips";
import SocialLink from "../utils/SocialLink";

const Home = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        {/* Background Layer */}
        <div
          className="bg-theme clip-path h-[80vh] lg:h-[75vh] md:h-[65vh]
                sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-150 z-1"
        ></div>

        {/* Content */}
        <div
          className="relative opacity-100 z-20 grid items-center 
                justify-items-center nike-container"
        >
          {/* Title Section */}
          <div className="grid items-center mt-32 md:mt-28">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>

            {/* Button (Optional) */}
            {/* <button
              type="button"
              className="button-theme shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button> */}

            {/* Video Clips (Optional) */}
            {/* <div className="grid items-centre gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((video, key) => (
                <Clips key={key} imgsrc={video.imgsrc} clip={video.clip} />
              ))}
            </div> */}

            {/* Social Links */}
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((userHandles, key) => (
                <SocialLink key={key} icon={userHandles.icon} />
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center">
            <img
              src={img}
              alt="home-img/img"
              className="w-auto h-[55vh] lg:h-[55vh] md:h-[45vh] sm:h-[40vh] xsm:h-[33vh] 
                         cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

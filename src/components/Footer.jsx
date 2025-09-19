import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-white">
        {/* Company Name and Description */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Layer Flex</h1>
          <p className="text-lg mt-2">
            Bringing stories of creativity alive through our unique range of 3D models, wearables, and collectibles.
          </p>
        </div>

        {/* Footer Sections */}
        <div className="grid items-start grid-cols-3 gap-5 sm:grid-cols-1">
          {/* Categories Section */}
          <div className="grid items-start gap-2">
            <h1 className="text-xl lg:text-lg md:text-base uppercase font-semibold">Categories</h1>
            <ul className="grid items-start gap-1">
              {links[1]?.map((link, j) => (
                <li
                  key={j}
                  className="text-lg sm:text-md cursor-pointer hover:text-gray-300 transition-all"
                >
                  {/* ✅ Use Link instead of <a> */}
                  <Link
                    to={`/category/${link.link.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Section */}
          <div className="grid items-start gap-2">
            <h1 className="text-xl lg:text-lg md:text-base uppercase font-semibold">Company Info</h1>
            <ul className="grid items-start gap-1">
              {links[2]?.map((link, j) => (
                <li
                  key={j}
                  className="text-lg sm:text-md cursor-pointer hover:text-gray-300 transition-all"
                >
                  {link.link}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="grid items-start gap-2">
            <h1 className="text-xl lg:text-lg md:text-base uppercase font-semibold">Social Media</h1>
            <ul className="flex items-center gap-4">
              <li><a href="#" className="text-2xl hover:text-gray-300"><FaFacebook /></a></li>
              <li><a href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></a></li>
              <li><a href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></a></li>
            </ul>
            <form className="mt-4">
              <label htmlFor="email" className="block text-lg mb-2">Subscribe to our newsletter:</label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-3 border rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-5 py-3 rounded-md hover:bg-gray-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-lg md:text-center">
            © {new Date().getFullYear()} Layer Flex All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

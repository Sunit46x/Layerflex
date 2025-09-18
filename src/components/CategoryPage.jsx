import React from "react";
import { useParams, Link } from "react-router-dom";
import ShoeCard from "../utils/ShoeCard";

// ✅ Marvel Images
import ironMan from "../assets/Marvel/iron man DID3.jpg";
import captainHydra from "../assets/Marvel/Captain Hydra.jpg";
import thor from "../assets/Marvel/THOR.jpg";
import hulk from "../assets/Marvel/hulk.jpg";
import blackWidow from "../assets/Marvel/Black widow stl.jpg";
import hawkeye from "../assets/Marvel/Hawkeye model.jpg";
import blackPanther from "../assets/Marvel/black-panther-civil-war-armor-helmet-3d-printable-model-print-file-stl-do3d-printed-06.jpg";
import doctorStrange from "../assets/Marvel/Doctor Strange.jpg";

// ✅ Cartoon & Anime Images
import naruto from "../assets/Cartoon/naruto.jpg";
import sasuke from "../assets/Cartoon/sasuke-with-susanoo-and-aoda-3d-print-statue-naruto-shippuden-3d-model-obj-stl.jpg";
import goku from "../assets/Cartoon/GOKU.jpg";
import vegeta from "../assets/Cartoon/Vegeta.jpg";
import luffy from "../assets/Cartoon/Luffy.jpg";
import zoro from "../assets/Cartoon/Zoro.jpg";
import ichigo from "../assets/Cartoon/Ichigo.jpg";
import kakashi from "../assets/Cartoon/Kakashi.webp";

// ✅ Gaming Images
import mario from "../assets/Gaming/Mario_Zbrush_View.jpg";
import luigi from "../assets/Gaming/Luigi_Zbrush_View.jpg";
import zelda from "../assets/Gaming/legend-of-zelda-link-3d-model-for-print.jpg";
import link from "../assets/Gaming/Link.jpeg";
import pikachu from "../assets/Gaming/Pikachu.jpg";
import charizard from "../assets/Gaming/Charizard.jpg";

import kratos from "../assets/Gaming/Kratos.webp";

// ✅ DC Images
import batmanKit from "../assets/DC/batman-kit.jpg";
import supermanClarkKent from "../assets/DC/superman-clark-kent-3d-print-3d-model-obj-stl.jpg";
import wonderWoman from "../assets/DC/diana-prince-wonder-woman-3d-model-stl.jpg";
import flash from "../assets/DC/Flash.png";
import aquaman from "../assets/DC/aquaman.jpg";
import cyborg2 from "../assets/DC/Cyborg 2.jpg";
import cyborg from "../assets/DC/Cyborg.jpg";
import greenLantern from "../assets/DC/green lantern.webp";
import shazam from "../assets/DC/Shazam.jpg";

// ✅ Categories with items
const categories = [
  {
    title: "Marvel Model",
    items: [
      { id: 1, title: "Iron Man", img: ironMan },
      { id: 2, title: "Captain Hydra", img: captainHydra },
      { id: 3, title: "Thor", img: thor },
      { id: 4, title: "Hulk", img: hulk },
      { id: 5, title: "Black Widow", img: blackWidow },
      { id: 6, title: "Hawkeye", img: hawkeye },
      { id: 7, title: "Black Panther", img: blackPanther },
      { id: 8, title: "Doctor Strange", img: doctorStrange },
    ],
  },
  {
    title: "Cartoon & Anime",
    items: [
      { id: 1, title: "Naruto", img: naruto },
      { id: 2, title: "Sasuke", img: sasuke },
      { id: 3, title: "Goku", img: goku },
      { id: 4, title: "Vegeta", img: vegeta },
      { id: 5, title: "Luffy", img: luffy },
      { id: 6, title: "Zoro", img: zoro },
      { id: 7, title: "Ichigo", img: ichigo },
      { id: 8, title: "Kakashi", img: kakashi },
    ],
  },
  {
    title: "Gaming Assets",
    items: [
      { id: 1, title: "Mario", img: mario },
      { id: 2, title: "Luigi", img: luigi },
      { id: 3, title: "Zelda", img: zelda },
      { id: 4, title: "Link", img: link },
      { id: 5, title: "Pikachu", img: pikachu },
      { id: 6, title: "Charizard", img: charizard },
      // { id: 7, title: "Master Chef", img: masterChief },
      { id: 8, title: "Kratos", img: kratos },
    ],
  },
  {
    title: "DC Characters",
    items: [
      { id: 1, title: "Batman Kit", img: batmanKit },
      { id: 2, title: "Superman Clark Kent", img: supermanClarkKent },
      { id: 3, title: "Wonder Woman", img: wonderWoman },
      { id: 4, title: "Flash", img: flash },
      { id: 5, title: "Aquaman", img: aquaman },
      { id: 6, title: "Cyborg 2", img: cyborg2 },
      { id: 7, title: "Cyborg", img: cyborg },
      { id: 8, title: "Green Lantern", img: greenLantern },
      { id: 9, title: "Shazam", img: shazam },
    ],
  },
];

const CategoryPage = () => {
  const { categoryName } = useParams();

  // ✅ Find category from URL
  const category = categories.find(
    (cat) =>
      cat.title.toLowerCase().replace(/\s+/g, "-") === categoryName
  );

  if (!category) {
    return (
      <p className="text-center text-red-500 mt-10">
        Category not found!
      </p>
    );
  }

  return (
    <div className="nike-container p-6">
      {/* Back button */}
      <Link
        to="/"
        className="text-blue-500 underline mb-4 inline-block"
      >
        ← Back to Categories
      </Link>

      {/* Category Title */}
      <h2 className="text-2xl font-bold mb-6 text-black drop-shadow">
        {category.title}
      </h2>

      {/* Items Grid */}
      <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {category.items.map((item) => (
          <ShoeCard
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            color="from-blue-500 to-indigo-500"
            shadow="shadow-lg shadow-blue-500"
            btn="Buy Now"
            price="50"
            rating="-"
            text=""
            ifSalesExist={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

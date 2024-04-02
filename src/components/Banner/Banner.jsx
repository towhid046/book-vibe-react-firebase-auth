import bannerImg from "./../../assets/images/banner-book.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header className="container mx-auto md:px-28 px-4 lg:py-20 md:py-14 py-8 flex flex-col lg:flex-row justify-between gap-10 items-center bg-[#f3f3f3] rounded-3xl lg:mb-24 md:mb-10 mb-7">
      <div className="lg:max-w-lg">
        <h1 className="lg:text-5xl md:text-4xl text-2xl mb-10 font-bold text-[#131313]">
          Books to freshen up your bookshelf
        </h1>
        <Link
          to={"/listed-books"}
          className="btn text-white bg-[#23BE0A] lg:text-xl font-bold"
        >
          View The List
        </Link>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </header>
  );
};

export default Banner;

import { Link } from "react-router-dom";
import Cover from "../assets/images/cover.jpg";
import Cover1 from "../assets/images/cover1.jpg";
import HomeBg1 from "../assets/images/home-bg.png";
import HomeBg2 from "../assets/images/home-bg2.png";
import HomeBg3 from "../assets/images/home-bg3.png";

function Home() {
  return ( 
    <>
      <img src={Cover} className="w-full" />

      <div className="mt-10 text-center text-2xl">
        <h2>Collection list</h2>
      </div>

      <div className="mt-10">
        <ul className="flex justify-center space-x-5">
          <li>
            <div className="relative bg-slate-300 w-full">
              <img
                src={HomeBg1}
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-xl">
                <Link
                  to="/books"
                  className="text-white hover:underline text-sm md:text-xl"
                >
                  Books
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-400 w-full">
              <img
                src={HomeBg2}
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-xl">
                <Link
                  to="/commission"
                  className="text-white hover:underline text-sm md:text-xl"
                >
                  Commission
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-400 w-full">
              <img
                src={HomeBg3}
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-xl">
                <Link
                  to="/origianl_arts"
                  className="text-white hover:underline text-sm md:text-xl"
                >
                  Original Arts
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative mt-10 bg-slate-200">
        <img
          src={Cover1}
          className="object-cover mix-blend-multiply w-full"
        />

        <div className="absolute text-white inset-0 flex items-center justify-center">
          <ul className="space-y-3">
            <li className="text-sm md:text-3xl font-sans ml-20 md:ml-0">
              <p>PAPER CROWN ARTISTS</p>
            </li>
            <li className="mx-16 md:mx-10 text-sm md:text-lg ">
              <p>Click to view creative process</p>
            </li>

            <li className="mx-24">
              <button className=" text-xs md:text-lg bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black  rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                LEARN MORE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

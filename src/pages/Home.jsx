import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <img src="../src/assets/cover.jpg" className="w-full" />

      <div className="mt-10 text-center text-2xl">
        <h2>Collection list</h2>
      </div>

      <div className="mt-10">
        <ul className="flex justify-center space-x-5">
          <li>
            <div className="relative bg-slate-300 w-full">
              <img
                src="../src/assets/home-bg.png"
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute bottom-20 text-white text-xl mx-36 cursor-pointer">
                <Link to="/books" className=" text-white hover:underline">
                  Books
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-400 w-full">
              <img
                src="../src/assets/home-bg2.png"
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute bottom-20 text-white text-xl mx-24 px-5">
                <p className=" text-white hover:underline">Commission</p>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-400 w-full">
              <img
                src="../src/assets/home-bg3.png"
                className="max-h-64 object-cover mix-blend-multiply"
              />

              <div className="absolute bottom-20 text-white text-xl mx-20 px-10">
                <p className=" text-white hover:underline">Original Art</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative mt-10 bg-slate-200">
        <img
          src="../src/assets/cover1.jpg"
          className="object-cover mix-blend-multiply w-full"
        />

        <div className="absolute text-white inset-0 flex items-center justify-center">
          <ul className="space-y-3">
            <li className=" text-3xl font-sans">
              <p>PAPER CROWN ARTISTS</p>
            </li>
            <li className="mx-10 text-lg">
              <p>Click to view creative process</p>
            </li>

            <li className="mx-24">
              <button className="bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black  rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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

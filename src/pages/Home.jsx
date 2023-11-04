import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <img src="../src/assets/backdrop.png" className="mt-3" />

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
                <Link to="/books" className=" text-white hover:underline">Books</Link>
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
    </>
  );
}

export default Home;

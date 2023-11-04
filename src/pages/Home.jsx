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
              <img src="../src/assets/home-bg.png" className="max-h-64 object-cover mix-blend-multiply" />

              <div className="absolute bottom-20 text-white text-xl mx-36">
                <p>Books</p>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-300 w-full">
              <img src="../src/assets/home-bg.png" className="max-h-64 object-cover mix-blend-multiply" />

              <div className="absolute bottom-20 text-white text-xl mx-36">
                <p>Commission</p>
              </div>
            </div>
          </li>
          <li>
            <div className="relative bg-slate-300 w-full">
              <img src="../src/assets/home-bg.png" className="max-h-64 object-cover mix-blend-multiply" />

              <div className="absolute bottom-20 text-white text-xl mx-36 -my-7">
                <p>Original Art</p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Home;

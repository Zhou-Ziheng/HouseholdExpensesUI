import React from "react";
import backgroundImg from "../../image/background.jpg";

const Home = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: "cover",
  }

  return (
    <div className="App">
      <div className="w-full h-[853px] flex flex-col justify-between bg-slate-50" style={backgroundImageStyle}>
        <div className="w-full h-[853px] bg-gradient-to-r from-black">
          <div className="grid md:grid-cols-2 m-[250px]">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
              <p className="text-2xl text-white">Leave Your Worries Behind.</p>
              <h1 className="py-3 text-5xl md:7xl font-bold text-white">
                Manage Your Expenses
              </h1>
              <p className="text-2xl text-white">All With A Click Of A Button</p>
              <a
                href="/signup"
                class="mt-6 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#8B74BD] border-2 border-[#8B74BD] rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-[#8B74BD] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                <span class="relative">Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

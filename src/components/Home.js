import React from "react";
import HomeLeft from "./HomeLeft";
import Navbar from "./Navbar";

const fakeData = require("../components/FakeData.js/FakeData");
function Home() {
  console.log(fakeData.expolreData);
  const data = fakeData.expolreData;
  return (
    <div className="home">
      <Navbar />
      <div>
        {data.map((newData, i) => {
          return (
            <div key={i}>
              <HomeLeft
                title={newData.title}
                desc={newData.desc}
                time={newData.time}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

import Stars from "../Images/5-stars.png";
import Spons1 from "../Images/Spons1.png";
import Spons2 from "../Images/Spons2.png";
import Spons3 from "../Images/Spons3.png";
import Shape1 from "../Images/shape1.png";
import Wave from "../Images/wave-shape.png";
import Setting from "../Images/setting-shape.png";
import Spending from "../Images/spending-shape.png";
import HalfCircle from "../Images/half-circle.png";
import Card from "../Images/Card.png";
import Film from "../Images/film-shape.png";

function Home() {
  return (
    <>
      <div className="home bg-black text-white sm:flex sm:items-center ">
        <div className="left w-1/2 p-10 ml-20">
          <div className="rating flex items-center">
            <img src={Stars} className="sm:w-20 mr-2" alt="" />
            <span className="text-sm font-extralight">
              Based on <span className="font-bold">10,000+</span> reviews
            </span>
          </div>
          <div className="heading text-6xl font-bold my-4">
            Seamless solution with our magic!
          </div>
          <div className="para text-sm font-light my-2">
            UIFry is the project management platform that aims for teams to
            achieve an efficient dream management
          </div>
          <div className="get-demo flex items-center my-5 sm:w-2/3">
            <div className="text-sm font-light sm:w-1/2 border-l-green-400 border-l pl-2">
              Start work efficiently with <br /> UIFry SaaS product
            </div>
            <button className="bg-green-500 py-2 px-4 rounded-xl animate-pulse">
              Get a free demo
            </button>
          </div>
          <div className="spons sm:flex sm:items-center my-20">
            <img src={Spons1} className="sm:w-28 mr-5" alt="" />
            <img src={Spons2} className="sm:w-28 mr-5" alt="" />
            <img src={Spons3} className="sm:w-28 mr-5" alt="" />
          </div>
        </div>
        <div className="right flex">
          <div className="left-left">
            <div className="shape-circle ml-10">
              <img src={Shape1} width={200} className="animate-pulse" alt="" />
            </div>
            <div className="flex items-center">
              <div className="wave mr-10 my-10">
                <img src={Wave} width={120} alt="" />
              </div>
              <div className="setting bg-gray-800 p-4 rounded-t-full rounded-l-full">
                <img src={Setting} width={30} className="animate-spin" alt="" />
              </div>
            </div>
            <div>
              <img
                src={Film}
                width={40}
                className="bg-gray-800 p-2 rounded-lg animate-bounce"
                alt=""
              />
            </div>
            <div className="flex items-center ">
              <div className="wave mr-10 my-10 relative">
                <img src={Spending} width={120} alt="" />
                <span className="absolute left-10 top-10">$530</span>
                <span className="text-xs">Spending this week</span>
              </div>
              <div className="setting pb-24 w-fit ">
                <img src={HalfCircle} className="animate-pulse " width={60} alt="" />
              </div>
            </div>
          </div>
          <div className="right-right ml-4">
            <div className="card">
              <img src={Card} width={200} alt="" />
            </div>
            <div className="">
              <div className="flex ">
                <div className="left mr-6">
                  <div className="text-sm">Balance</div>
                  <div className="text-sm m-1">$ 101,291.12</div>
                </div>
                <div className="right ">
                  <div className="text-sm">Gains/Losses</div>
                  <div className=" text-sm font-light text-red-700 bg-gray-800 transparent-100 mt-1 p rounded w-fit px-1">
                    $ 45264800
                  </div>
                </div>
              </div>
              <hr className="my-4  border-gray-700 pr-5" />
              <div
                className="text-sm
              "
              >
                Quick Transfer
              </div>
              <div>
                <div className="text-sm mt-4">Card Number</div>
                <input
                  type="text"
                  className="bg-gray-800 rounded my-2 px-2 p pl-4 "
                  placeholder="**** **** ****     VISA"
                />
              </div>
              <div className="">
                <div className=" flex ">
                  <div className="mr-2">
                    <div className="text-sm">Expiry Date</div>
                    <input
                      type="text"
                      className="bg-gray-800 rounded my-2 p pl-4 w-24 "
                      placeholder="--/--"
                    />
                  </div>
                  <div className="">
                    <div className="text-sm">CVV</div>
                    <input
                      type="text"
                      className="bg-gray-800 rounded my-2 p pl-4 w-24 "
                      placeholder="----"
                    />
                  </div>
                </div>
                <div className="flex items-center ">
                  <button className="bg-green-500 py-1 px-2 rounded text-sm mt-2 mr-2">
                    Send Money
                  </button>
                  <button className="bg-gray-800 text-sm py-1 px-3 rounded mt-2 mr-3">
                    Save Draft 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

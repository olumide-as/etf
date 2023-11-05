import { React } from "react";
import { approval, kill, og, together, } from "../../Assets";

const Home = () => {


  return (
    <div>
      {/* Landing */}
      <div className="bg-gradient-to-t from-purple-950 to-neutral-950">
      <section className="lg:mt-12 lg:mx-24 mt-12 max-w-screen-xl pb-12 px-4 items-center justify-center md:px-8 ">
        <div className="space-y-4 flex-1 text-center ">
          <h1 className="text-white font-bold text-7xl xl:text-8xl font-agbalumo">
            Eat
            <span className="text-green-400"> The</span> Fud
          </h1>

          <p className="text-gray-300 max-w-xl text-2xl md:text-3xl leading-relaxed sm:mx-auto ">
            Are you hungry for some fud?
          </p>
        </div>

        <div className=" my-12 py-4 ">
          <div className="max-w-screen-xl mx-auto text-slate-50 font-jost p-4 lg:w-6/12 rounded-2xl border text-center border-green-400 bg-gradient-to-b from-green-400 to-neutral-950">
            <h5 className="font-bold text-xl pb-4">
              Only true OGs will get airdropped $ETF and eat the fud when it’s served hot
            </h5>

            <div className="mx-auto lg:max-w-2xl">
              <div className="relative w-full hover:shadow-xl aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={og}
                  alt="og"
                />
              </div>
            </div>




          </div>
        </div>
      </section>
      </div>



      {/* Kill */}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-agbalumo">
              <span className="text-green-400"> $ETF </span>will kill all Solana Fuds.
            </h2>
          </div>


          <div className=" my-4 py-4 ">
            <div className="max-w-screen-xl mx-auto text-slate-50 font-jost p-4  rounded-2xl border text-center border-purple-600 bg-gradient-to-b from-purple-600 to-neutral-950">
              <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full hover:shadow-xl aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src={kill}
                    alt="kill"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* together */}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-agbalumo">
              <span className="text-green-400"> Together, </span> we will set Solana free from all fuds.
            </h2>
          </div>


          <div className=" my-4 py-4 ">
            <div className="max-w-screen-xl mx-auto text-slate-50 font-jost p-4  rounded-2xl border text-center border-purple-600 bg-gradient-to-b from-purple-600 to-neutral-950">
              <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full hover:shadow-xl aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src={together}
                    alt="together"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* approval */}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-agbalumo">
              The <span className="text-green-400"> $ETF </span> approval is underway.
            </h2>
          </div>


          <div className=" my-4 py-4 ">
            <div className="max-w-screen-xl mx-auto text-slate-50 font-jost p-4  rounded-2xl border text-center border-purple-600 bg-gradient-to-b from-purple-600 to-neutral-950">
              <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full hover:shadow-xl aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src={approval}
                    alt="approval"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;

import logo from "./assets/images/photo-jpg.png";
import rama from "./assets/images/rama1.jpg";
import { UserCircleIcon } from "@heroicons/react/solid";
import { ArchiveIcon } from "@heroicons/react/solid";
import { PresentationChartLineIcon } from "@heroicons/react/solid";
import { DesktopComputerIcon } from "@heroicons/react/solid";
import { UploadIcon } from "@heroicons/react/solid";
import { VideoCameraIcon } from "@heroicons/react/solid";
import { TerminalIcon } from "@heroicons/react/solid";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-wrap ">
          <h4 className="flex-auto text-xl text-center">
            <img src={logo} className="App-logo " alt="logo" />
            KeDai Computerworks | Papan Informasi
          </h4>
        </div>
      </header>

      <div id="container" class="w-4/5 mx-auto">
        <div class="flex flex-wrap sm:flex-row md:flex-wrap lg:flex-nowarp">
          <div class="sm:w-1/4 p-2 md:w-1/2 lg:w-3/12 xl:w-1/4 ">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center lg:h-full">
              <h2 className="text-bold font-medium">Agenda Pembelajaran</h2>
              <h2 className="text-gray-400 block lg:mb-7 ">
                <UserCircleIcon className="h-5 w-5 text-blue-500 icon1 " />
                Pemateri
              </h2>
              <div class="mb-9">
                <img
                  class="w-auto mx-auto rounded-full py-3 px-4"
                  src={rama}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-medium text-gray-700">Rama Ismaya S</h2>
              <span class="text-blue-500 block mb-5">Front End Developer</span>

              <div class="px-4 py-2 bg-blue-500 text-white rounded-full">
                893.KD.XIX.20
              </div>
            </div>
          </div>
          <div class="sm:w-1/4 p-2 md:w-1/2 lg:w-3/12 xl:w-1/4">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">
                Agenda Keorganisasisan :{" "}
                <span className="text-gray-400 text-smaller">
                  Piket<span className="text-white">.....</span>
                </span>
              </h2>
              <h2 className="text-gray-400 block lg:mb-7">
                <UserCircleIcon className="h-5 w-5 text-blue-500 icon1" />
                BPH Pendamping
              </h2>
              <div class="mb-3">
                <img
                  class="w-auto mx-auto rounded-full py-3 px-4"
                  src={rama}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-medium text-gray-700">Rama Ismaya S</h2>
              <span class="text-blue-500 block mb-5">Front End Developer</span>

              <div class="px-4 py-2 bg-blue-500 text-white rounded-full">
                893.KD.XIX.20
              </div>
            </div>
          </div>
          <div class="sm:w-1/4 p-2 md:w-1/2 lg:w-3/12 xl:w-1/4">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">
                Agenda Keorganisasisan :{" "}
                <span className="text-gray-400 text-smaller ">Nginap</span>
              </h2>
              <h2 className="text-gray-400 block lg:mb-7">
                <UserCircleIcon className="h-5 w-5 text-blue-500 icon1" />
                BPH Pendamping
              </h2>
              <div class="mb-3">
                <img
                  class="w-auto mx-auto rounded-full py-3 px-4"
                  src={rama}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-medium text-gray-700">Rama Ismaya S</h2>
              <span class="text-blue-500 block mb-5">Front End Developer</span>

              <div class="px-4 py-2 bg-blue-500 text-white rounded-full">
                893.KD.XIX.20
              </div>
            </div>
          </div>
          <div class="sm:w-1/4 p-2 md:w-1/2 lg:w-3/12 xl:w-1/4">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center lg:h-full">
              <h2 className="text-bold font-medium">Admin EXTRACT XIX</h2>
              <h2 className="text-white block">
                <UserCircleIcon className="h-5 w-5 text-blue-500 icon1 lg:mb-7" />
              </h2>
              <div class="mb-9">
                <img
                  class="w-auto mx-auto rounded-full py-3 px-4"
                  src={rama}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-medium text-gray-700">Rama Ismaya S</h2>
              <span class="text-blue-500 block mb-5">Front End Developer</span>

              <div class="px-4 py-2 bg-blue-500 text-white rounded-full">
                893.KD.XIX.20
              </div>
            </div>
          </div>{" "}
        </div>
        {/* card kedua */}
        <div class="h-100 w-full flex items-center justify-left bg-teal-lightest font-sans">
          <div class="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
              <h1 class="text-white text-center px-4 py-2 bg-black">
                <ArchiveIcon className="h-5 w-5 text-blue-500 icon1" />
                Tools & Properties | Inventaris
              </h1>
              <div class="flex mt-4">
                {/* <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                  Add
                </button> */}
              </div>
            </div>
            <div>
              <div class="flex mb-4 items-center">
                <p class="w-full text-grey-darkest">
                  <PresentationChartLineIcon className="h-5 w-5 text-black icon1" />
                  {""}
                  Proyektor : 1
                </p>
                <p class="w-full text-grey-darkest">
                  <TerminalIcon className="h-5 w-5 text-black icon1" />
                  {""}
                  Terminal : 8
                </p>
                {/* <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button> */}
              </div>
              <div class="flex mb-4 items-center">
                <p class="w-full  text-green">
                  <DesktopComputerIcon className="h-5 w-5 text-black icon1" />
                  Monitor : 1
                </p>
                <p class="w-full  text-green">
                  <VideoCameraIcon className="h-5 w-5 text-black icon1" />
                  Cctv : 4
                </p>
                {/* <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button> */}
              </div>
              <div class="flex mb-4 items-center">
                <p class="w-full  text-green">
                  <UploadIcon className="h-5 w-5 text-black icon1" />
                  Router : 1
                </p>
                {/* <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                  Not Done
                </button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button> */}
              </div>
              <div class="flex mb-4 items-center">
                <p class="w-full  text-green">
                  <DesktopComputerIcon className="h-5 w-5 text-black icon1" />
                  Laptop : 1
                </p>
                {/* <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                  Not Done
                </button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button> */}
              </div>
              <div class="flex mb-4 items-center">
                <p class="w-full  text-green">
                  <DesktopComputerIcon className="h-5 w-5 text-black icon1" />
                  Tv : 1
                </p>
                {/* <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                  Not Done
                </button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

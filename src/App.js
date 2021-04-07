import logo from "./assets/images/photo-jpg.png";
import rama from "./assets/images/rama1.jpg";
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
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">Agenda Pembelajaran</h2>
              <h2 className="text-blue-500 block">Pemateri</h2>
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
          <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">
                Agenda Keorganisasisan :{" "}
                <span className="text-blue-500 text-smaller">Piket</span>
              </h2>
              <h2 className="text-blue-500 block">BPH Pendamping</h2>
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
          <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">
                Agenda Keorganisasisan :{" "}
                <span className="text-blue-500 text-smaller">Nginap</span>
              </h2>
              <h2 className="text-blue-500 block">BPH Pendamping</h2>
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
          <div class="sm:w-1/4 p-2">
            <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <h2 className="text-bold font-medium">Admin EXTRACT XIX</h2>
              <h2 className="text-white block">.</h2>
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;

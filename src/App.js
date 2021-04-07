import logo from "./assets/images/photo-jpg.png";
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
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://i.pravatar.cc/150?img=66"
              alt=""
            />
          </div>
          <h2 class="text-xl font-medium text-gray-700">Pande Muliada</h2>
          <span class="text-blue-500 block mb-5">Front End Developer</span>

          <div class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</div>

        </div>
      </div>


      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://i.pravatar.cc/150?img=31"
              alt=""
            />
          </div>
          <h2 class="text-xl font-medium text-gray-700">Saraswati Cahyati</h2>
          <span class="text-blue-500 block mb-5">Back End Developer</span>

          <div class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</div>

        </div>
      </div>

      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://i.pravatar.cc/150?img=18"
              alt=""
            />
          </div>
          <h2 class="text-xl font-medium text-gray-700">Wayan Alex</h2>
          <span class="text-blue-500 block mb-5">Data Scientist</span>

           <div class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</div>

        </div>
      </div>

      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://i.pravatar.cc/150?img=28"
              alt=""
            />
          </div>
          <h2 class="text-xl font-medium text-gray-700">Ketut Julia</h2>
          <span class="text-blue-500 block mb-5">Project Manager</span>

          <div class="px-4 py-2 bg-blue-500 text-white rounded-full">Hire</div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;

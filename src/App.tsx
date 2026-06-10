import AppDp from "./components/AppDp";

function App() {
  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen flex justify-center items-center">
        <div className="bg-amber-200/10 backdrop-blur-md border border-white/20 shadow-xl/10 shadow-gray-600 m-2 rounded-xl w-11/12 text-center text-white h-auto">
          <div>
            <AppDp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

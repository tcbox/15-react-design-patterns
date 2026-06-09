import Counter from "./components/counter";
import Todo from "./components/TodoList";

function App() {
  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen flex justify-center items-center">
        <div
          className="
  /* 1. trasnparent cheyali */
  bg-white/10 
  
  /* 2. bulr cheyali */
  backdrop-blur-md 
  
  /* 3. backborder cheyali with same color */
  border border-white/20 
  
  /* 4. Soft Shadow  */
  shadow-xl/10 shadow-gray-600
  
  /* Visual styling options */
  m-2 rounded-xl p-8 w-96 text-center text-white h-auto

"
        >
          <div>
            <Counter />
          </div>

          <div className="w-full border-t border-white/10 my-4"></div>

          <div>
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

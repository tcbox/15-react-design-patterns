import { useState } from "react";

// Todo element object structures types definition
type TodoItem = {
  id: string;
  text: string;
};

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");

  // Component render loop running dynamically matching ids generator
  const generateId = () => String(Math.floor(Math.random() * 1000));

  // Item list additions logic handler
  function handleSubmit() {
    if (!input.trim()) return;

    const todoUpdater = (todo: TodoItem[]) => {
      return todo.concat({
        text: input,
        id: generateId(),
      });
    };
    setTodos(todoUpdater);
    setInput(""); // Reset input field after submission
  }

  // Item deletion logic tracker (Targeting unique string id matching)
  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  return (
    /* h-auto & min-h-fit dynamically grows the box size as elements stack up */
    <div className="min-h-fit h-auto w-full space-y-3 flex flex-col items-center p-4 text-white">
      <div>
        <h1 className="text-xl font-semibold text-white">Todo</h1>
      </div>

      {/* Input container row controls */}
      <div className="flex gap-2 w-full justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="hello"
          className="border border-gray-100/30 p-1 rounded-sm focus:border-gray-400 focus:ring-gray-500 focus:ring-1 outline-none text-black w-full"
        />

        <div
          onClick={handleSubmit}
          className="py-1 px-5 text-gray-300 bg-gray-950 w-fit rounded-sm hover:bg-gray-900 cursor-pointer select-none"
        >
          submit
        </div>
      </div>

      {/* Dynamic scrolling content listing rows map engine */}
      <div className="w-full space-y-2">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="w-full flex items-center gap-2">
              {/* Extracting specific text parameter string */}
              <div className="h-auto bg-gray-900 px-3 py-2 rounded-sm min-h-10 items-center justify-start flex flex-2 text-gray-50 break-all">
                <span>{todo.text}</span>
              </div>

              {/* Status checkboxes buttons templates (Optional hooks) */}
              {/* Delete operation passing actual matching unique structural todo.id */}
              <div
                onClick={() => removeTodo(todo.id)}
                className="bg-gray-500 h-9 rounded-full px-2 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-all select-none"
              >
                ❌
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

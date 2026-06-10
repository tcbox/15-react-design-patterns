import Counter from "../../projects/counter";
import Todo from "../../projects/TodoList";

export default function main() {
  return (
    <div>
      {" "}
      <div>
        <Counter />
      </div>
      <div className="w-full border-t border-white/10 my-4"></div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

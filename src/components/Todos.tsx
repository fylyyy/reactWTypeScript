import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";


const Todos: React.FC = () => {

   const todosCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem id={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;

// This was used before contextApi usage

// import TodoModel from "../models/todo";
// import TodoItem from "./TodoItem";
// import classes from "./Todos.module.css";

// type Props = {
//   children?: React.ReactNode;
//   items: TodoModel[];
//   onRemoveTodo: (id: string) => void;
// };

// const Todos: React.FC<Props> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem id={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}></TodoItem>
//       ))}
//     </ul>
//   );
// };

// export default Todos;

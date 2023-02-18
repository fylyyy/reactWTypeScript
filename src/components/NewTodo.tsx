import { useRef, useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext)

  const submithandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    // use regular operator ! if you want to have enteredText to string only because ! means that there is 100% probability that this value is accessible always and never undefined
    if (enteredText.trim().length === 0) {
      // throw an err
      return;
    }

    todosCtx.addTodo(enteredText)
  };

  return (
    <form onSubmit={submithandler} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

// Was used bofore context Api

// import { useRef } from "react";
// import classes from './NewTodo.module.css'

// const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
//   const todoTextInputRef = useRef<HTMLInputElement>(null);

//   const submithandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     const enteredText = todoTextInputRef.current!.value;
//     // use regular operator ! if you want to have enteredText to string only because ! means that there is 100% probability that this value is accessible always and never undefined
//     if (enteredText.trim().length === 0) {
//       // throw an err
//       return;
//     }

//     props.onAddTodo(enteredText)
//   };

//   return (
//     <form onSubmit={submithandler} className={classes.form}>
//       <label htmlFor="text"></label>
//       <input type="text" id="text" ref={todoTextInputRef} />
//       <button>Add Todo</button>
//     </form>
//   );
// };

// export default NewTodo;

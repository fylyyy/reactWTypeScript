import classes from "./TodoItem.module.css";

type Props = {
  children?: React.ReactNode;
  id: string;
  text: string;
  onRemoveTodo: () => void
};

const TodoItem: React.FC<Props> = (props) => {

  return (
    <li onClick={props.onRemoveTodo} className={classes.item} key={props.id}>
      {props.text}
    </li>
  );
};

export default TodoItem;

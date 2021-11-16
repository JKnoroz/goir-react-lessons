import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TdoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    {/* <button onClick={onDeleteTodo}>Delete</button> */}
    <IconButton onClick={onDeleteTodo}>
      <DeleteIcon width="32" height="32" fill="#fff" />
    </IconButton>
  </>
);

export default Todo;

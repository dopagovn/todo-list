import React, { useState } from "react";
import { Typography, Input, Button, Space, Select, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice";

import Todo from "../Todo";
import "./TodoList.css";

const { Title } = Typography;

function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [piority, setPiority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoName.trim() !== "") {
      const todo = {
        name: todoName.trim(),
        piority: piority,
      }
      dispatch(addTodo(todo));
      setTodoName("");
    }
  };

  const handlePiorityChange = (value) => {
    setPiority(value);
  }

  return (
    <div className="TodoList">
      <Title>TODO APP</Title>
      <div className="todo-item">
        <Space.Compact>
          <Input
            className="input-todo"
            placeholder="Input your Todo here"
            size="medium"
            onChange={handleInputChange}
          />
          <Select defaultValue="High" value={piority} onChange={handlePiorityChange} style={{ width: 100 }}>
            <Select.Option value="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low">
              <Tag color="lime">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo} className="add-button">
            ADD
          </Button>
        </Space.Compact>
      </div>
      <div className="list-todo">
        {todoList.map((todo) => (
          <Todo id={todo.id} key={todo.id} piority={todo.piority} completed={todo.completed}>{todo.name}</Todo>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

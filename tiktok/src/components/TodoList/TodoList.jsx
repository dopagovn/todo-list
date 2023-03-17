import React, { useState } from "react";
import "./TodoList.css";
import { Typography, Input, Button, Select, Tag, Row, Col, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/actions.js";
import { v4 as uuidv4 } from "uuid";
import { todoListSelector } from "../../redux/selector";
import Todo from "../Todo/Todo";

const { Title } = Typography;

function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [piority, setPiority] = useState("Medium");

  const todoList = useSelector(todoListSelector);

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        piority: piority,
        completed: false,
      })
    );
    setTodoName("");
    setPiority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const onPiorityChange = (value) => {
    setPiority(value);
  };

  return (
    <div className="TodoList">
      <div className="todo-item">
        <Title>TO-DO LIST</Title>
        <Row>
          <Col span={24}>
            <Space.Compact size={8}>
              <Input
                size="large"
                style={{ width: 300 }}
                value={todoName}
                onChange={handleInputChange}
              />
              <Select
                defaultValue="Medium"
                size="large"
                value={piority}
                style={{ width: 100 }}
                onChange={onPiorityChange}
              >
                <Select.Option value="Medium">
                  <Tag color="geekblue">Medium</Tag>
                </Select.Option>
                <Select.Option value="Low">
                  <Tag color="lime">Low</Tag>
                </Select.Option>
                <Select.Option value="High">
                  <Tag color="red">High</Tag>
                </Select.Option>
              </Select>
              <Button
                onClick={onAddTodo}
                icon={<PlusOutlined />}
                type="primary"
                size="large"
              >
                Add
              </Button>
            </Space.Compact>
          </Col>
        </Row>
      </div>
      {todoList.todoList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          piority={todo.piority}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;

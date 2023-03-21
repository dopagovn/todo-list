import { useState } from "react";
import { Typography, Checkbox, Tag, Row, Col, Button } from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import { useDispatch} from 'react-redux';
import { toggleCompleted, removeTodo } from "../../redux/slice";

import React from "react";
import "./Todo.css";

const colorMapWithPiority = {
  High: "red",
  Medium: "blue",
  Low: "lime",
};

const { Text } = Typography;

function Todo({ children, piority, id, completed }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () => {
    setChecked(!checked);
    dispatch(toggleCompleted(id))
  };

  const handleDeleted = () => {
    dispatch(removeTodo(id))
  }

  return (
    <div style={{ width: "100%", height: 40, marginBottom: 10 }}>
      <Row
        style={{
          ...(completed ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        <Col span={1}>
          <Checkbox onChange={handleChange} checked={completed} />
        </Col>
        <Col span={16}>
          <Text className="todo-name">{children}</Text>
        </Col>
        <Col span={6}>
          <Tag color={colorMapWithPiority[piority]}>{piority}</Tag>
        </Col>
        <Col span={1}>
          <Button type="default" onClick={handleDeleted}  icon={<DeleteOutlined />} />
        </Col>
      </Row>
    </div>
  );
}

export default Todo;

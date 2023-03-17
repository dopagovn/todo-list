import { Checkbox, Col, Row, Typography, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {checkedTodo} from '../../redux/actions/actions'

import "./Todo.css";


const piorityMapping = {
  High: "red",
  Medium: "geekblue",
  Low: "lime",
};

const { Text } = Typography;

function Todo({ name, piority, completed, id }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();

  const onChecked = () => {
    
        setChecked(!checked);
        dispatch(checkedTodo(id))
  };

  return (
    <div className="Todo">
      <Row
        justify="space-between"
        style={{
          margin: 3,
          ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        <Col span={1}>
          <Checkbox checked={checked} onChange={onChecked} />
        </Col>
        <Col span={18} offset={1}>
          <Text onClick={onChecked} style={{ fontSize: 15, cursor: "pointer" }}>
            {name}
          </Text>
        </Col>
        <Col span={4}>
          <Tag color={piorityMapping[piority]}>{piority}</Tag>
        </Col>
      </Row>
    </div>
  );
}

export default Todo;

import React, { useState } from 'react';
import { Form, Input, Button, Space} from 'antd';

import {v4} from "uuid";

import {connect} from "react-redux";
import {addMessage} from "../action/publish";

import DateTime from './DateTime';

import '../style.css';

const TextInput = ({addMessage}) => {
  const [form] = Form.useForm();
  const [requiredMark]= useState('optional');
  const [title, setTitle] = useState('');

  const handleSubmit = e => {

    e.preventDefault();
      if (title === '') {
      return alert("Please add a message");
    }

    const publish = {
      title,
      id:v4()
    }

    addMessage(publish);

    setTitle("");

  }


  return (
    <Form onSubmit={handleSubmit}
      form={form}
      layout="vertical"
      initialValues={{
        requiredMark
      }}>

      <Form.Item label="Your Tweet" required>
        <Input placeholder="Your Twitter Message Goes Here ....." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Auto Delete Date and Time" required>
        <DateTime />
      </Form.Item>
      <Form.Item >
        <Space className = "btnCentered"align = "center">
          <Button type="primary" shape="round" size="middle" onClick={handleSubmit}>Publish</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addMessage: publish => {
    dispatch(addMessage(publish))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)
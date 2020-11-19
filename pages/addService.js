import NavBar from "../components/navbar";
import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Row,
  Card,
  Col,
  Divider,
} from "antd";
import SkyCom from "../components/sky";
const AddService = () => {
  const [componentSize, setComponentSize] = useState("default");
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <SkyCom>
      <NavBar defaultSelectedKeys={"4"}>
        <Row gutter={24}></Row>
        <Card title="Add service" bordered={true} className="card-postproject">
          <Form>
            <Row gutter={[24]}>
              <Col span={15}>
                <Form.Item label="title" className="title">
                  <Input
                    placeholder="enter the title of service..."
                    ref={inputRef}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        inputRef2.current.focus();
                      }
                    }}
                  />
                </Form.Item>
              </Col>
              <Col md={15} sm={24}>
                <Form.Item label="Description" className="title">
                  <Input.TextArea
                    ref={inputRef2}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        inputRef3.current.focus();
                      }
                    }}
                    placeholder=" Enter the service description accurately. It is prohibited to enter an email,
                phone number, or other contact information."
                  />
                </Form.Item>
              </Col>
              <Row gutter={24}>
                <Col md={8} sm={24}>
                  <Form.Item label="Gategory">
                    <Select
                      ref={inputRef3}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          inputRef4.current.focus();
                        }
                      }}
                    >
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={8} sm={24}>
                  <Form.Item label="Budget" rules={[{ type: "number" }]}>
                    <InputNumber
                      placeholder="The total amount of.."
                      ref={inputRef4}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          inputRef5.current.focus();
                        }
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col md={8} sm={24}>
                  <Form.Item label="Delivered time">
                    <DatePicker
                      ref={inputRef5}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          submitRef.current.focus();
                        }
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Col span={24}>
                <Form.Item>
                  <Button ref={submitRef} style={{ borderColor: " #87d068" }}>
                    Add Service
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </NavBar>
    </SkyCom>
  );
};
export default AddService;

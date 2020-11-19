import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import SkyCom from "../components/sky";
import { useRouter } from "next/router";
import Link from "next/link";
import { register } from "../api";

const SignUp = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const submitRef = useRef();
  const handlSubmit = () => {
    setIsLoading(true);
    register({ phone, password, name }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace("/");
        setIsLoading(false);
      }
    });
  };

  return (
    <SkyCom>
      <div className="site-card-border-less-wrapper">
        <Card title=" Sign Up" bordered={true}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    inputRef.current.focus();
                  }
                }}
                suffix={<UserOutlined />}
              />
            </Col>
            <Col span={24}>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    inputRef.current.focus();
                  }
                }}
                suffix={<PhoneOutlined />}
              />
            </Col>
            <Col span={24}>
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                ref={inputRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitRef.current.focus();
                  }
                }}
              />
            </Col>
            <Divider />

            <Col span={24}>
              <Button
                loading={isLoading}
                onClick={handlSubmit}
                type="primary"
                block
                ref={submitRef}
              >
                Sign Up
              </Button>
            </Col>
            <Divider />
            <span>
              Already have an account? <Link href="/login"> Login</Link>
            </span>
          </Row>
        </Card>
      </div>
    </SkyCom>
  );
};

export default SignUp;

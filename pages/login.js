import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import SkyCom from "../components/sky";
import { useRouter } from "next/router";
import Link from "next/link";
import { login} from "../api"
const Login = (props) => {
  const router = useRouter();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef2 = useRef();
  const inputRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handlSubmit = () => {
    setIsLoading(true);
    login({ phone, password }, (err, result) => {
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
        <Card title="Login" bordered={true}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                ref={inputRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    inputRef2.current.focus();
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
                ref={inputRef2}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitRef.current.focus();
                  }
                }}
              />
            </Col>
            <Divider />
            <Link href="/forgetPassword" style={{ color: "#87d068" }}>
              Forgot Password?
            </Link>
            <Col span={24}>
              <Button
                loading={isLoading}
                onClick={handlSubmit}
                type="primary"
                block
                ref={submitRef}
              >
                Login
              </Button>
            </Col>
            <Divider />
            <span>
              Don't have an account?
              <Link href="/signUp" style={{ color: "#87d068" }}>
                Sign Up
              </Link>
            </span>
          </Row>
        </Card>
      </div>
    </SkyCom>
  );
};

export default Login;

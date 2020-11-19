import NavBar from "../components/navbar";
import SkyCom from "../components/sky";
import { useState, useRef, useEffect } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Card, Input, Row, Col, Button } from "antd";
import Link from "next/link";
const Forget = () => {
  const [phone, setPhone] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handlSubmit = () => {
    setIsLoading(true);
    login({ phone }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
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
                    submitRef.current.focus();
                  }
                }}
                suffix={<PhoneOutlined />}
              />
            </Col>
            <Col span={24}>
              <Button
                loading={isLoading}
                onClick={handlSubmit}
                type="primary"
                block
                ref={submitRef}
              >
                <Link href="/code"> Send Code</Link>
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </SkyCom>
  );
};
export default Forget;

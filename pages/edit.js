import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import SkyCom from "../components/sky";
import { useRouter } from "next/router";
import Link from "next/link";
const Edit = (props) => {
  const router = useRouter();
  const [phone, setPhone] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef2 = useRef();
  const inputRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handlSubmit = () => {
    setIsLoading(true);
    edit({ phone, newPassword, oldPassword }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        router.replace("/");
      }
    });
  };

  return (
    <SkyCom>
      <div className="site-card-border-less-wrapper">
        <Card title="Edit info" bordered={true}>
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
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="enter Old Password"
                ref={inputRef2}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitRef.current.focus();
                  }
                }}
              />
            </Col>
            <Col span={24}>
              <Input.Password
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="set New Password"
                ref={inputRef2}
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
                Update information
              </Button>
            </Col>
            <Divider />
          </Row>
        </Card>
      </div>
    </SkyCom>
  );
};

export default Edit;

import { Card, Avatar, Row, Col, Button } from "antd";
import NavBar from "../components/navbar";

import Link from "next/link";

import {
  ApartmentOutlined,
  FieldTimeOutlined,
  StarOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import SkyCom from "./../components/sky";
const { Meta } = Card;

const AddService = () => {
  return (
    <>
      <SkyCom>
        <NavBar defaultSelectedKeys={"7"}>
          <Card
            className="card-postproject"
            style={{ maxWidth: 900, borderRadius: 16 }}
            title="Yusor Ahmad "
            extra={
              <Button
                style={{
                  borderRadius: 16,
                  fontSize: 20,
                  color: "#87d068",
                  paddingBottom: 35,
                }}
              >
                <Link href="/edit"> edit profile</Link>
              </Button>
            }
          >
            <Meta
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style={{ width: 80, height: 80 }}
                />
              }
              description=" This is the description, This is the description"
            ></Meta>

            <Row>
              <Col md={7} sm={24}>
                <FieldTimeOutlined />
                <span>Response speed:6Hours</span>
              </Col>
              <Col md={4} sm={24}>
                <StarOutlined />
                <span>Rating: 4.5</span>
              </Col>
            </Row>
          </Card>
        </NavBar>
      </SkyCom>
    </>
  );
};
export default AddService;

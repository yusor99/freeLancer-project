import {
  Layout,
  Menu,
  Input,
  Col,
  Row,
  Button,
  Popover,
  Avatar,
  Typography,
} from "antd";
import Link from "next/link";
const { Title, Text } = Typography;
import {
  UserOutlined,
  HddOutlined,
  FormOutlined,
  CarOutlined,
  MailOutlined,
  ShoppingOutlined,
  BellOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  SearchOutlined,
  HomeOutlined,
  RightOutlined,
  LeftOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import CompFooter from "../components/footer";
const { Search } = Input;
const { Header, Sider, Content, Footer } = Layout;

export default function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);
  //const name = localStorage.getItem("blog_user",JSON.stringify(result.user.name));
  const onSearch = (value) => console.log(value);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={onCollapse}
          collapsible
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            margin: "auto",
          }}
        >
          <div className="space"></div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={props.defaultSelectedKeys}
          >
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              defaultSelectedKeys={["1"]}
            >
              <Link href="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MailOutlined />}>
              Inbox
            </Menu.Item>
            <Menu.Item key="3" icon={<BellOutlined />}>
              Notifications
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<AppstoreAddOutlined />}
              defaultSelectedKeys={["4"]}
            >
              <Link href="/addService">Add Service</Link>
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<FormOutlined />}
              defaultSelectedKeys={["5"]}
            >
              <Link href="/postProject">Post Project</Link>
            </Menu.Item>

            <Menu.Item key="" icon={<ShoppingOutlined />}>
              Purchases
            </Menu.Item>
            <Menu.Item key="99" icon={<CarOutlined />}>
              Orders
            </Menu.Item>

            <Menu.Item key="11" icon={<MessageOutlined />}>
              contact us
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<TeamOutlined />}
              defaultSelectedKeys={["6"]}
            >
              <Link href="/aboutUs"> About us</Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<UserOutlined />}
              defaultSelectedKeys={["7"]}
            >
              <Link href="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-background"
            style={{ padding: 0, margin: 0 }}
          >
            <div className="container">
              <Row gutter={24}>
                <Col span={8}>
                  <span className="logo">
                    <h2 style={{ color: "white" }}>
                      <span style={{ color: "#87d068", fontSize: 35 }}>
                        Maslah
                      </span>
                      Tech
                    </h2>
                  </span>
                </Col>
                <Col span={8}>
                  <Input
                    placeholder="search about something"
                    prefix={<SearchOutlined />}
                    style={{
                      borderRadius: 12,
                      border: 2,
                      borderColor: "#87d068",
                    }}
                  />
                </Col>
                <Col span={4}>
                  <div className="user-account">
                    <Text style={{ color: "#fff", marginRight: 8 }}></Text>
                    <Popover
                      content={
                        <div>
                          <Button type="link">
                            <Link href="/profile"> Show profile</Link>
                          </Button>
                          <br />
                          <Button
                            type="link"
                            onClick={() => {
                              localStorage.removeItem("blog_token");
                              localStorage.removeItem("blog_user");
                              router.replace("/login");
                            }}
                          >
                            Sign Out
                          </Button>
                        </div>
                      }
                    >
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Popover>
                  </div>
                </Col>
                <Col span={4}>
                  <Button style={{ color: "#87d068", borderRadius: 16 }}>
                    <Link href="/addService">Add Service</Link>
                  </Button>
                </Col>
              </Row>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{ minHeight: 550, margin: 10 }}
          >
            <div className="container cover ant-layout-sider-children">
              {props.children}
            </div>
          </Content>
          <Footer>
            <CompFooter />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

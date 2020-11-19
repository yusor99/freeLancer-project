import NavBar from "../components/navbar"
import { Row, Col, Card } from "antd";
import SkyCom from "./../components/sky";

const AboutUs = () => {
  return (
    <>
      <NavBar defaultSelectedKeys={"6"}>
        <SkyCom>
          <Card
            title="About Maslah Tech"
            bordered={true}
            className="card-postproject"
          >
            <h2>
              <span style={{ color: "#87d068" }}>Maslah </span>Tech
            </h2>
            <div style={{ lineHeight: 2.5 }}>
              Is a platform that gathers and links the freelancers with the
              business owners and people who want a services to be done online
              i.e design, translation, programming etc. in Iraq. With the
              provision of online payment methods such as Zain Cash, Launched in
              November 2020, frontend by <b>Yusor Ahmad</b> and backend by{" "}
              <b>Omar Osama</b>
            </div>

            <Row
              style={{
                display: "flex",
                margin: 10,
                alignItems: "center",
              }}
            >
              <Col md={4} sm={12} xs={24}>
                <img src="/img/zain.png" style={{ width: 100, height: 100 }} />
              </Col>
            </Row>
          </Card>
        </SkyCom>
      </NavBar>
    </>
  );
};
export default AboutUs;

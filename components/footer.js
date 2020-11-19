import { Col, Row } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
export default function CompFooter() {
  return (
    <div className="footer">
      <div className=" content">
        <Row
          gutter={24}
          style={{
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Row md={12} xs={24}>
            <span>
              Copyright © 2020 Freelancer Technology Pty Limited (ACN 141 959
              042)
            </span>
          </Row>

          <Row md={12} sm={12} xs={24}>
            <Col span={8}>
              <img src="img/zain.png" className="pay" />
            </Col>
            <Col span={8}>
              <img src="img/visa.png" className="pay" />
            </Col>
          </Row>
          <Row md={9} sm={12} xs={24}>
            <Col span={8}>
              <img
                src="/img/facebook (1).png"
                style={{ cursor: "pointer", margin: 2 }}
              />
            </Col>
            <Col span={8}>
              <img
                src="/img/instagram (2).png"
                style={{ cursor: "pointer", margin: 2 }}
              />
            </Col>
            <Col span={8}>
              <img
                src="/img/twitter.png"
                style={{ cursor: "pointer", margin: 2 }}
              />
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}

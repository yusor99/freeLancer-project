import NavBar from "../components/navbar";
import Card from "../components/card";
import { getData } from "../api";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import SkyCom from "./../components/sky";
import { getCategories } from "../api";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories((err, result) => {
      if (err) throw err;
      console.log(result.data.data[0]);
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
      } else {
        setData(result.data.data[0]);
        console.log(result.data.data[0]);
      }
    });
  }, []);

  return (
    <>
      <NavBar defaultSelectedKeys={"1"}>
        <SkyCom>
          <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
            {data.map((category) => (
              <Col md={8} sm={12} xs={24} key={category.id}>
                <Card item={category} />
              </Col>
            ))}
          </Row>
        </SkyCom>
      </NavBar>
    </>
  );
};
export default Home;

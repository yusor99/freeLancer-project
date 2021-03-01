import NavBar from "../components/navbar";
import Card from "../components/card";
import { getData } from "../api";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import SkyCom from "./../components/sky";
import { getCategories } from "../api";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Programming and development",
      img: "./img/free2.png",
    },
    {
      id: 2,
      title: "E-Marketing",
      img: "./img/images.jpg",
    },
    {
      id: 3,
      title: "graphic design",
      img: "./img/images2.jpg",
    },
    {
      id: 4,
      title: "Business",
      img: "./img/business.jpg",
    },
    {
      id: 5,
      title: "Writing and translating",
      img: "./img/write.png",
    },
    {
      id: 6,
      title: "Video design",
      img: "./img/Video.png",
    },
  ];
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

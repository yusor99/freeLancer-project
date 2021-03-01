import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="blog-item">
      <div className="img">
        <img
          src={item.img}
          style={{
            width: 200,
            height: 200,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        />
      </div>
      <Link href="/">
        <h4 style={{ color: "#001529", fontSize: 22, cursor: "pointer" }}>
          {item.title}
        </h4>
      </Link>
    </div>
  );
};

export default Card;

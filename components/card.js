import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link href={`services/${item.id}`} style={{ cursor: "pointer" }}>
      <div className="blog-item">
        <div className="img">
          <img src="/img/free.png" style={{ width: 200, height: 300 }} />
        </div>
        <h4>{item.title}</h4>
      </div>
    </Link>
  );
};

export default Card;
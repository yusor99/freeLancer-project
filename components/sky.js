import Sky from "react-sky";

export default function SkyCom(props) {
  const myImage = "/img/free.png";
  const myImage2 = "/img/free2.png";
  return (
    <>
      <div>
        <Sky
          images={{
            /* 2: myImage  you can pass images in any form: link, imported via webpack... */
            0: myImage,
            1: myImage2,
          }}
          how={
            40
          } /* Pass the number of images Sky will render chosing randomly */
          time={60} /* time of animation */
          size={"60px"} /* size of the rendered images */
          background={"#001529"} /* color of background */
        />
        {props.children}
      </div>
    </>
  );
}

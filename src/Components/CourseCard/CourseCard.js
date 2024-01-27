import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./courseCard.css";

import { courseImgUrl } from "../../Utils/constants";

const CourseCard = (props) => {
  const { data, getDetails, addToCart} = props;
  const truncateDescription = (description, wordCount) => {
    const words = description.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return description;
  };
  
  return (
    <>
      <Card style={{ width: "auto", maxWidth: "17rem", margin: "10px auto" }}>
        <Card.Img variant="top" src={`${courseImgUrl}/${data.img}`} />
        <Card.Body className="text-start">
        
          <Card.Title className="title">{data.title} </Card.Title>
          <Card.Text>
            <span className="title text-container">Description :</span> {" "}
            {truncateDescription(data.description, 8)}
          </Card.Text>
          <Card.Text>
            <span className="title">Instructor </span>: {data.instructor}
          </Card.Text>
          <Card.Text>
            <span className="title">Pricing </span>: {`₹${data.pricing}`}
          </Card.Text>

          <div className="btns">
            <Button variant="primary" onClick={() => getDetails(data.id)}>
              More
            </Button>
            <Button variant="success" onClick={() => addToCart(data)}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default CourseCard;

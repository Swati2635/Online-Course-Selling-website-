import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courseImgUrl } from "../../Utils/constants";
import "./coursedetail.css";
import Button from "react-bootstrap/Button";
import { useCart } from "../../Context/CartContext";
const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/courses?id=${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setCourseData(jsonData[0]);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      }
    };

    fetchCourseDetail(); 
  }, [id]); 
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {courseData.length === 0 ? (
            <>
              <h2>No Data Found</h2>
            </>
          ) : (
            <>
              <div>
                <img
                  className="imgcourse"
                  src={`${courseImgUrl}/${courseData.img}`}
                  alt={courseData.img}
                />
              </div>
              <div>
                <p>
                  {" "}
                  <span className="title">Title </span>: {courseData.title}
                </p>
                <p>
                  <span className="title">Instructor </span>:{" "}
                  {courseData.instructor}
                </p>
                <p>
                  <span className="title">Description </span>:{" "}
                  {courseData.description}
                </p>
                <p>
                  <span className="title">Pricing </span>:{" "}
                  {`₹ ${courseData.pricing}`}{" "}
                  <span>
                    <Button
                      variant="success"
                      onClick={() => addToCart(courseData)}
                    >
                      Add to Cart
                    </Button>
                  </span>
                </p>
               
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CourseDetails;

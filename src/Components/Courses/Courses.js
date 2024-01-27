import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
//import ShimmerUiCard from "../ShimmerUi/ShimmarUiCard";
//import courseListApi from "../../Utils/constants";
import { useNavigate } from "react-router-dom";
import {useCart} from './../../Context/CartContext';
const Courses = () => {
  const [courseList, seCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(courseList, loading, seCourseList);
  const navigate = useNavigate();
  const {  addToCart } = useCart();

  useEffect(() => {
    getCoursesList();
  }, []);
  const getCoursesList = async () => {
    try {
      const response = await fetch("http://localhost:3000/courses");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      seCourseList(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  };


  const getDetails = (id) => {
    navigate(`/coursesDetails/${id}`);
  };


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        //     <>
        //             <ShimmerUiCard/>
        //   </>
        <>
          <div className="container">
            <div className="row">
              {courseList.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <CourseCard data={item}  getDetails={getDetails} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
    </>
  );
};
export default Courses;

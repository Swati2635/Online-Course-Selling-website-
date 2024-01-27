import "./home.css";
import {categories, categoriesImgurl} from '../../Utils/constants';
const Home = () => {
  return (<>
    <div className="banner">
      <h1 style={{ textAlign: " start", padding: "0px 0 0 30px" }}>
        {`World's #1`} <br /> Online Learning Platform
      </h1>
      <ul>
      <li className="list"><b>5,000,000</b> careers advanced</li>
      <li className="list"><b>1,500</b> live classes every month</li>

      <li className="list">
      <b>85%</b> report career benefits including promotion or a new job{" "}
      </li>
      </ul>
    </div>
    <h3 style={{padding: '7px',
	margin: '10px 0px'}}>Top Categories  </h3> 
    <div className="container">
        <div className="row">
          {categories.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <div>
                <img className="TopCategoriesImg" src={`${categoriesImgurl}/${item.imgId}`} alt={item.imgId} />
                <h4 style={{ padding: '5px' }}>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};
export default Home;

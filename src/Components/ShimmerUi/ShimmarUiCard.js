import Card from "react-bootstrap/Card";

const ShimmerUiCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Card
            style={{
              width: "15rem",
             height:'20rem',
              maxWidth: "15rem",
              margin: "10px ",
              background: "#e2dddd91",
            }}
          ></Card>
          <Card
            style={{
              width: "15rem",
             height:'20rem',
              maxWidth: "15rem",
              margin: "10px ",
              background: "#e2dddd91",
            }}
          ></Card>
          <Card
            style={{
              width: "15rem",
             height:'20rem',
              maxWidth: "15rem",
              margin: "10px ",
              background: "#e2dddd91",
            }}
          ></Card>
          <Card
            style={{
              width: "15rem",
             height:'20rem',
              maxWidth: "15rem",
              margin: "10px ",
              background: "#e2dddd91",
            }}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUiCard;

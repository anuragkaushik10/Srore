import { Card, Col, Row } from "react-bootstrap";

export default function ShowData(props) {
  console.log(props);
  return (
    <div className="App">
      {props.data
        .filter((d) => {
          if (props.searchValue === "") {
            return d;
          } else if (
            d.title.toLowerCase().includes(props.searchValue.toLowerCase())
          ) {
            return d;
          }
        })
        .map((d) => (
          <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={d.image}
                    width="180px"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
    </div>
  );
}

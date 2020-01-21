import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Appetizers from "../components/Appetizers/Appetizers";
// import API from "../../src/utils/API";
import "./Stylesheets/MyOrders.css";

function MyOrders() {
  // // tried setting up state as a placeholder, but it doesn't function properly. It receives stuff from the backend, but it doesn't update current order.
  // const [order, setOrder] = useState([])

  // useEffect(() => {
  //     loadOrder();
  //   }, []);

  // function loadOrder() {
  // API.getProducts()
  //     // below is dummy data to render on the middle of the page
  //     // This api call is unnecessary
  //     .then(res => setOrder(res.data[0].description))
  //     .catch(err => console.log(err));
  // }

  //   function loadOrder() {
  //     API.getProducts()
  //       .then(res => setOrder(res.data[0].description))
  //       .catch(err => console.log(err));
  //   }

  return (
    // below does not contain any state at the moment. You'll need to do that after globalstate is made (or prop drilling thereto). Layout might change, but probably by much. Robert's going to work on the layout of stuff, but feel free to add state anywhere on this page. Please let Robert know when you make any changes to this page, though, so he can update you on any changes (design changes, layout, etc..).

    <Container fluid>
      <Row>
        <img
          className="d-block w-100 mx-auto"
          src="https://bbimenus.blob.core.windows.net/items/03501/ccapp-03501-2x.png"
          alt="background image"
          style={{ opacity: 0.2 }}
        />
        <p> insert state here.</p>

        {/* Robert planned to set image as background and overlay text over the image as the current orders populate. */}

        {/*  */}
      </Row>
      <p>aa</p>
      <Row className="text-center mt-4 mb-4">
        <Col lg={12}>
          <p>This is the View My Orders Page.</p>
          {/* Button below goes to menu page */}
          <Button variant="outline-danger mr-2" size="lg" href="/menu">
            Back To Menu
          </Button>
          {/* Button below goes to view-check page */}
          <Button variant="outline-success ml-2" size="lg" href="/view-check">
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyOrders;

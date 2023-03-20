import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductComponent(props) {
  const [cartAdd, setCartAdd] = useState(false);
  const [buttonValue, setButtonValue] = useState("Add To Cart");
  const [productData1, setProductData1] = useState([]);
  


  function cartHandler(id) {
    setCartAdd(true);
    setButtonValue("Product is added");

    productData1.map((ele) => {
      if (ele.productId == id) {
        ele = {
          ...ele,
          mobileNo: parseInt(sessionStorage.getItem("data")),
          totalPrice:ele.productQuantity*ele.productPrice
        };
        axios
          .post("http://localhost:8082/order/add", ele)
          .then((response) => console.log(response));
      }
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);


  return (
    <Card id="cart" style={{ width: "18rem" }}>
   
      <Card.Img className="carImg" variant="top"  src={props.data.imgURL} />
   
      <Card.Body>
        <Card.Title>{props.data.productName}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Description: {props.data.productDescription}</ListGroup.Item>
        <ListGroup.Item>Price: {props.data.productPrice}</ListGroup.Item>
        <ListGroup.Item>Pack Price: {props.data.productQuantity} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button 
          className="addcart"
  
          disabled={cartAdd}
          onClick={() => cartHandler(props.data.productId)}
        >
          {buttonValue}
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductComponent;

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
function FirstProd(props) {
 
  const naviagte=useNavigate();

 


  return (
    <Card id="cart" style={{ width: "18rem" }}>
      <Card.Img className="carImg" variant="top" src={props.data.imgURL} />
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
        
        
          onClick={() => 
            {
              alert("First Login To Add Product")
              naviagte("/userlogin")}}
        >
         Add To Cart
        </button>
      </Card.Body>
    </Card>
  );
}

export default FirstProd;
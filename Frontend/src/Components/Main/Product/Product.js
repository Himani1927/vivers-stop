import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../../Navigation/Category";
import ProductNavigation from "../../Navigation/ProductNavigation";
import ImageChange from "./imageChange";
import ProductComponent from "./ProductComponent";
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';



export default function Product() {
  const [productData1, setProductData1] = useState([]);
  const navigate = useNavigate();
 
  
  function FoodGrains(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return  e.productCategory==="Cereals"  ||  e.productCategory==="Pulses"
      }));
    });
  }

  function OilGhee(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return  e.productCategory==="Cooking Oil"  
      }));
    });
  }
    
  function Spices(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return  e.productCategory==="Spices"  
      }));
    });
  }

  function Bakery(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return  e.productCategory==="Baked food"  
      }));
    });
  }

  function Dairy(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return  e.productCategory==="Dairy"  
      }));
    });
  }

  function Snacks(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return e.productCategory==="Snacks"  
      }));
    });
  }

  function BaveragesJuices(){
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data.filter(e=>{
       return e.productCategory==="Soft Drinks"  || e.productCategory==="Flavoured Milk"  ||  e.productCategory==="Juice"
      }));
    });
  }



  // Use effect to get data.
  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/product/all").then((response) => {
      setProductData1(response.data);
    });
  }, []);


  return (
    <>
      <ProductNavigation />
      <div style={{marginTop: "60px"}}>
      <Nav className="justify-content-center" activeKey="/product">
        <Nav.Item>
          <Nav.Link  onClick={FoodGrains}>Food Grains</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={OilGhee}>Oil & Ghee</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={Spices}>Spices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={Bakery}>Bakery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={Dairy}>Dairy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={Snacks}>Snacks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={BaveragesJuices}>Baverages & Juices</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      <ImageChange/>
      <div className="productcart" style={{marginLeft:"15px"}}>
       
        {productData1.map((element) => {
          return (
            <>
              <ProductComponent key={element.id} data={element} />
            </>
          );
        })}
      </div>
    </>
  );
}
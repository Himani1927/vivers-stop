package com.order.controller;

import com.order.entity.Order;
import com.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{orderId}")
    public Order getOrderById(@PathVariable Long orderId){
        return orderService.getOrderById(orderId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<String> addOrder(@RequestBody Order order){
        orderService.addOrder(order);
        return new ResponseEntity<>("Order added", HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{orderId}")
    public ResponseEntity<String> updateOrder(@PathVariable Long orderId, @RequestBody Order order){
        orderService.updateOrder(orderId, order);
        return new ResponseEntity<>("Order updated", HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId){
        orderService.deleteOrder(orderId);
        return new ResponseEntity<>("Order deleted", HttpStatus.ACCEPTED);
    }
}

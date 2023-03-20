package com.order.controller;

import com.order.entity.OldOrder;
import com.order.service.OldOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/oldorder")
public class OldOrderController {

    @Autowired
    private OldOrderService oldOrderService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<OldOrder> getAllOrders(){
        return oldOrderService.getAllOrders();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{orderId}")
    public OldOrder getOrderById(@PathVariable Long orderId){
        return oldOrderService.getOrderById(orderId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<String> addOrder(@RequestBody OldOrder order){
        oldOrderService.addOrder(order);
        return new ResponseEntity<>("Order added", HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{orderId}")
    public ResponseEntity<String> updateOrder(@PathVariable Long orderId, @RequestBody OldOrder order){
        oldOrderService.updateOrder(orderId, order);
        return new ResponseEntity<>("Order updated", HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId){
        oldOrderService.deleteOrder(orderId);
        return new ResponseEntity<>("Order deleted", HttpStatus.ACCEPTED);
    }
}

package com.order.service;

import com.order.entity.Order;

import java.util.List;

public interface OrderService {

    Order getOrderById(Long orderId);

    List<Order> getAllOrders();

    void addOrder(Order order);

    void updateOrder(Long orderId, Order order);

    void deleteOrder(Long orderId);
}

package com.order.service;

import com.order.entity.OldOrder;
import com.order.entity.Order;

import java.util.List;

public interface OldOrderService {

    OldOrder getOrderById(Long orderId);

    List<OldOrder> getAllOrders();

    void addOrder(OldOrder order);

    void updateOrder(Long orderId, OldOrder order);

    void deleteOrder(Long orderId);
}

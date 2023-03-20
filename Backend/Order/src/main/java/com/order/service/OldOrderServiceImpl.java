package com.order.service;

import com.order.entity.OldOrder;
import com.order.entity.Order;
import com.order.repository.OldOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OldOrderServiceImpl implements OldOrderService{

    @Autowired
    private OldOrderRepository oldOrderRepository;

    @Override
    public OldOrder getOrderById(Long orderId) {
        return oldOrderRepository.findById(orderId).get();
    }

    @Override
    public List<OldOrder> getAllOrders() {
        return (List<OldOrder>) oldOrderRepository.findAll();
    }

    @Override
    public void addOrder(OldOrder order) {
        oldOrderRepository.save(order);
    }

    @Override
    public void updateOrder(Long orderId, OldOrder order) {
        oldOrderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long orderId) {
        oldOrderRepository.deleteById(orderId);
    }
}

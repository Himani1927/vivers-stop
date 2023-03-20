package com.order.repository;

import com.order.entity.OldOrder;
import com.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OldOrderRepository extends JpaRepository<OldOrder, Long> {
}

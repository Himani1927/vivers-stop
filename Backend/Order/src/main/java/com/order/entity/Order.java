package com.order.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long orderId;

    private long mobileNo;

    private long productId;

    private String productName;

    private long productPrice;

    private String productDescription;

    private String productCategory;

    private long productQuantity;

    private long productStock;

    private String productBrand;

    private String imgURL;

    private long totalPrice;

}

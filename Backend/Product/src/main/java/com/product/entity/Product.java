package com.product.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long productId;

    private String productName;

    private long productPrice;

    private String productDescription;

    private String productCategory;

    private long productQuantity;

    private long productStock;

    private String productBrand;

    private String imgURL;

}

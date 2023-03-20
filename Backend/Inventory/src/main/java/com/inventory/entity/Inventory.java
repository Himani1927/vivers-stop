package com.inventory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Table(name = "inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long inventoryId;

    private String productName;

    private long productPrice;

    private String productDescription;

    private String productCategory;

    private long productQuantity;

    private long stock;

    private String brand;
}

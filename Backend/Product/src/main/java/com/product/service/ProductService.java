package com.product.service;

import com.product.entity.Product;

import java.util.List;

public interface ProductService {

    Product getProductById(Long productId);

    List<Product> getAllProducts();

    void addProduct(Product product);

    void updateProduct(Long productId, Product product);

    void deleteProduct(Long productId);
}

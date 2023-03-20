package com.inventory.service;

import com.inventory.entity.Inventory;

import java.util.List;

public interface InventoryService {

    Inventory getInventoryById(Long inventoryId);

    List<Inventory> getAllInventories();

    void addInventory(Inventory inventory);

    void updateInventory(Long inventoryId, Inventory inventory);

    void deleteInventory(Long inventoryId);


}

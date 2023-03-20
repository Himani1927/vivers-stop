package com.inventory.service;

import com.inventory.entity.Inventory;
import com.inventory.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryServiceImpl implements InventoryService{

    @Autowired
    private InventoryRepository inventoryRepository;


    @Override
    public Inventory getInventoryById(Long inventoryId) {
        return inventoryRepository.findById(inventoryId).get();
    }

    @Override
    public List<Inventory> getAllInventories() {
        return (List<Inventory>) inventoryRepository.findAll();
    }

    @Override
    public void addInventory(Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    @Override
    public void updateInventory(Long inventoryId, Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    @Override
    public void deleteInventory(Long inventoryId) {
        inventoryRepository.deleteById(inventoryId);
    }
}

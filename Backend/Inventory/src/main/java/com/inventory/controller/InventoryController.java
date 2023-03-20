package com.inventory.controller;

import com.inventory.entity.Inventory;
import com.inventory.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/all")
    public List<Inventory> getAllInventories(){
        return inventoryService.getAllInventories();
    }

    @GetMapping("/{inventoryId}")
    public Inventory getInventoryById(@PathVariable Long inventoryId){
        return inventoryService.getInventoryById(inventoryId);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addInventory(@RequestBody Inventory inventory){
        inventoryService.addInventory(inventory);
        return new ResponseEntity<>("Inventory added", HttpStatus.ACCEPTED);
    }

    @PutMapping("/update/{inventoryId}")
    public ResponseEntity<String> updateInventory(@PathVariable Long inventoryId,@RequestBody Inventory inventory){
        inventoryService.updateInventory(inventoryId, inventory);
        return new ResponseEntity<>("Inventory updated", HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{inventoryId}")
    public ResponseEntity<String> deleteInventory(@PathVariable Long inventoryId){
        inventoryService.deleteInventory(inventoryId);
        return new ResponseEntity<>("Inventory deleted", HttpStatus.ACCEPTED);
    }

}

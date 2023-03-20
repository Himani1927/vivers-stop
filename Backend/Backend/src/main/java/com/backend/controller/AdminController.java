package com.backend.controller;

import com.backend.entity.Admin;
import com.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }


    @PostMapping("/add")
    public ResponseEntity<String> addAdmin(@RequestBody Admin admin){
        adminService.addAdmin(admin);
        return new ResponseEntity<>("Admin added", HttpStatus.OK);
    }

}

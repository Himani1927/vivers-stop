package com.backend.service;

import com.backend.entity.Admin;
import com.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;


    @Override
    public List<Admin> getAllAdmins() {
        return (List<Admin>) adminRepository.findAll();
    }

    @Override
    public void addAdmin(Admin admin) {
        adminRepository.save(admin);
    }

    @Override
    public void updateAdmin(String email, Admin admin) {
        adminRepository.save(admin);
    }
}

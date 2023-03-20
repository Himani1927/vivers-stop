package com.backend.service;


import com.backend.entity.Admin;

import java.util.List;

public interface AdminService {

    List<Admin> getAllAdmins();

    void addAdmin(Admin admin);

    void updateAdmin(String email, Admin admin);


}

package com.backend.service;

import com.backend.entity.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();
    void addUser(User user);
    void updateUser(String email, User user);
}

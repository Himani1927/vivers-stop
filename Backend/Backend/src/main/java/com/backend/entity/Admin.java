package com.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Table(name = "admin")
public class Admin {
    @Id
    private String email;

    private long mobileNo;

    private String fullName;

    private String password;
}

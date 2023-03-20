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
@Table(name = "user_login")
public class Login {
    @Id
    private long mobileNo;

    private String email;

    private String password;
}

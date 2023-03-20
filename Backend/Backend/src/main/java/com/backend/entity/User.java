package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Table(name = "user_registration")
public class User {
    @Id
    private String email;

    private String fullName;

    private long mobileNo;

    private String password;

    private String city;

    private String state;

    private int zipCode;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "date_of_birth", nullable=false)
    private LocalDate dob;

    private String address;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Login login;
}

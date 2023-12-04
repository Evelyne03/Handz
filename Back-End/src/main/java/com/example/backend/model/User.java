package com.example.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int user_id;
    private String name;
    private String email;
    private String password;
    private LocalDate created_at;
    private String profile_info;

    public User() {

    }
    public User(int user_id, String name, String email, String password, LocalDate created_at, String profile_info) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.profile_info = profile_info;
    }

    @Override
    public String toString() {
        return "user{" +
                "user_id=" + user_id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", created_at=" + created_at +
                ", profile_info='" + profile_info + '\'' +
                '}';
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDate created_at) {
        this.created_at = created_at;
    }

    public String getProfile_info() {
        return profile_info;
    }

    public void setProfile_info(String profile_info) {
        this.profile_info = profile_info;
    }
}

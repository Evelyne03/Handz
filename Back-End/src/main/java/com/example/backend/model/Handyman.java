package com.example.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "Handymans")
public class Handyman implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int id;
    private String name;
    private String expertise;
    private float price;
    private String email;
    private String password;
    private String imageURL;
    private int phoneNumber;
    private String profileDescription;
    public Handyman() {
    }

    public Handyman(int id, String name, String expertise, float price, String email,
                    String password, String imageURL, int phoneNumber, String profileDescription) {
        this.id = id;
        this.name = name;
        this.expertise = expertise;
        this.price = price;
        this.email = email;
        this.password = password;
        this.imageURL = imageURL;
        this.phoneNumber = phoneNumber;
        this.profileDescription = profileDescription;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfileDescription() {
        return profileDescription;
    }

    public void setProfileDescription(String profileDescription) {
        this.profileDescription = profileDescription;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExpertise() {
        return expertise;
    }

    public void setExpertise(String expertise) {
        this.expertise = expertise;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
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

    @Override
    public String toString() {
        return "Handyman{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", expertise='" + expertise + '\'' +
                ", price=" + price +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", profileDescription=" + profileDescription +
                '}';
    }
}

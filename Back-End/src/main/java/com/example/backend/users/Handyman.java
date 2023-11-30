package com.example.handzz.users;

import java.time.LocalDate;

public class Handyman extends Users{
    private String experise;

    public Handyman(int user_id, String name, String email, String password, LocalDate created_at, String experise) {
        super(user_id, name, email, password, created_at);
        this.experise = experise;
    }

    public Handyman(String experise) {
        this.experise = experise;
    }

    public String getExperise() {
        return experise;
    }

    public void setExperise(String experise) {
        this.experise = experise;
    }

    @Override
    public String toString() {
        return "Handyman{" +
                "experise='" + experise + '\'' +
                '}';
    }
}

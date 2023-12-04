package com.example.backend.controller;

import com.example.backend.model.Handyman;
import com.example.backend.service.HandymanService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/handyman")
public class HandymanController {
    private final HandymanService handymanService;
    public HandymanController(HandymanService handymanService) {
        this.handymanService = handymanService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Handyman>> getAllHands(){
        List<Handyman> handymans = handymanService.findAllHandymans();
        return new ResponseEntity<>(handymans, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Handyman> getHandymanById(@PathVariable("id") int id){
        Handyman handyman = handymanService.findHandymanById(id);
        return new ResponseEntity<>(handyman, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Handyman> addHandyman(@RequestBody Handyman handyman){
        Handyman newHandyman =handymanService.addHandyman(handyman);
        return new ResponseEntity<>(newHandyman, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Handyman> updateHandyman(@RequestBody Handyman handyman){
        Handyman updateHandyman =handymanService.updateHandyman(handyman);
        return new ResponseEntity<>(updateHandyman, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteHandyman(@PathVariable("id") int id){
        handymanService.deleteHandyman(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

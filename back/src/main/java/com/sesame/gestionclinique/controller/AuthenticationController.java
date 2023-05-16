package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.model.AuthenticationRequest;
import com.sesame.gestionclinique.model.RegisterRequest;
import com.sesame.gestionclinique.model.Utilisateur;
import com.sesame.gestionclinique.services.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @PostMapping("/registerr")
    public ResponseEntity<Utilisateur> registerUser(@RequestBody RegisterRequest request) {
        Utilisateur user = authService.register(request);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/loginn")
    public ResponseEntity<Utilisateur> loginUser(@RequestBody AuthenticationRequest request) {
        Utilisateur user = authService.authenticate(request);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }



}

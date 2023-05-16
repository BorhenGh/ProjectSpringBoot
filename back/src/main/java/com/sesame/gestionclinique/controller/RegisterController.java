package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.dao.UtilisateurRepository;
import com.sesame.gestionclinique.model.Utilisateur;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class RegisterController {

    private final UtilisateurRepository userRepository;

    public RegisterController(UtilisateurRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Utilisateur user) {

        // Vérifier si l'utilisateur existe déjà dans la base de données
        Optional<Utilisateur> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Cet email est déjà utilisé !");
        }

        // Si l'utilisateur n'existe pas déjà, enregistrer le nouvel utilisateur dans la base de données
        userRepository.save(user);

        return ResponseEntity.ok("Utilisateur enregistré avec succès !");
    }

}


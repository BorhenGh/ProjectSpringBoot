package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.dao.UtilisateurRepository;
import com.sesame.gestionclinique.model.AuthenticationRequest;
import com.sesame.gestionclinique.model.RegisterRequest;
import com.sesame.gestionclinique.model.Utilisateur;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UtilisateurRepository repository;
    public Utilisateur register(RegisterRequest request) {
        var user = Utilisateur.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password((request.getPassword()))

                .build();
        var savedUser = repository.save(user);
        return savedUser;
    }

    public Utilisateur authenticate(AuthenticationRequest request) {
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(); // throws exception if email is not found
        if (user.getPassword().equals(request.getPassword())) {
            return user;
        } else {
            throw new RuntimeException("Incorrect email or password");
        }
    }

}

package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.Medecin;

import java.util.List;
import java.util.Optional;

public interface MedecinServices {
    Medecin saveMedecin(Medecin p);
    List<Medecin> getAllMedecin();

    Optional<Medecin> getMedecintById(int id);

    Medecin updateMedecin(int id, Medecin medecin);

    void deleteMedecin(int id);
    int nombreMedecin();
}

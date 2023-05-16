package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.Chambre;
import com.sesame.gestionclinique.model.Nurse;

import java.util.List;
import java.util.Optional;

public interface ChambreServices {
    Chambre saveChambre(Chambre ch);
    List<Chambre> getAllChambre();

    Optional<Chambre> getChambreById(int id);

    Chambre updateChambre(int id, Chambre ch);

    void deleteChambre(int id);
    int nombreRoom();
}

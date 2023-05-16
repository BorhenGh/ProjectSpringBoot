package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.dao.NurseRepository;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Nurse;

import java.util.List;
import java.util.Optional;

public interface NurseServices {
    Nurse saveNurse(Nurse p);
    List<Nurse> getAllNurse();

    Optional<Nurse> getNurseById(int id);

    Nurse updateNurse(int id, Nurse nurse);

    void deleteNurse(int id);
    int nombreNures();
}

package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.Pharmacien;

import java.util.List;
import java.util.Optional;

public interface PharamcienServices {
    Pharmacien save (Pharmacien ph);
    List<Pharmacien> findallPharmacien();
    Optional<Pharmacien>getPharmacienbyid(int id);
    Pharmacien updatePhamacien(int id, Pharmacien ph);
    void deletePhamacien(int id);
    int nombrePharmacien();

}

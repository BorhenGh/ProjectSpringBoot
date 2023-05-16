package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.ChambreApi;
import com.sesame.gestionclinique.model.Chambre;
import com.sesame.gestionclinique.services.ChambreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class ChambreController implements ChambreApi {
    @Autowired
    ChambreServices chambreServices;
    @Override
    public Chambre saveChambre(Chambre ch) {
        return chambreServices.saveChambre(ch);
    }

    @Override
    public List<Chambre> getAllChambre() {
        return chambreServices.getAllChambre();
    }

    @Override
    public Optional<Chambre> getChambreById(int id) {
        return chambreServices.getChambreById(id);
    }

    @Override
    public Chambre updateChambre(int id, Chambre ch) {
        return chambreServices.updateChambre(id,ch);
    }

    @Override
    public void deleteChambre(int id) {
chambreServices.deleteChambre(id);
    }

    @Override
    public int nombreRoom() {
        return chambreServices.nombreRoom();
    }
}

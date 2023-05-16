package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.PharmacienApi;
import com.sesame.gestionclinique.model.Pharmacien;
import com.sesame.gestionclinique.services.PharamcienServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class PharamacienController implements PharmacienApi {
    @Autowired
    PharamcienServices pharamcienServices;
    @Override
    public Pharmacien save(Pharmacien ph) {
        return pharamcienServices.save(ph);
    }

    @Override
    public List<Pharmacien> findallPharmacien() {
        return pharamcienServices.findallPharmacien();
    }

    @Override
    public Optional<Pharmacien> getPharmacienbyid(int id) {
        return pharamcienServices.getPharmacienbyid(id);
    }

    @Override
    public Pharmacien updatePhamacien(int id, Pharmacien ph) {
        return pharamcienServices.updatePhamacien(id,ph);
    }

    @Override
    public void deletePhamacien(int id) {
pharamcienServices.deletePhamacien(id);
    }

    @Override
    public int nombrePharmacien() {
        return pharamcienServices.nombrePharmacien();
    }
}

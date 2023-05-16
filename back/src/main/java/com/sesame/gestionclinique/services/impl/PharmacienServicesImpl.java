package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.PharmacienRepository;
import com.sesame.gestionclinique.model.Pharmacien;
import com.sesame.gestionclinique.services.PharamcienServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PharmacienServicesImpl implements PharamcienServices {
    @Autowired
    PharmacienRepository pharmacienRepository;
    @Override
    public Pharmacien save(Pharmacien ph) {

        return pharmacienRepository.save(ph);
    }

    @Override
    public List<Pharmacien> findallPharmacien() {
        return pharmacienRepository.findAll();
    }

    @Override
    public Optional<Pharmacien> getPharmacienbyid(int id) {
        return pharmacienRepository.findById(id);
    }

    @Override
    public Pharmacien updatePhamacien(int id, Pharmacien ph) {
        Pharmacien pharmacien= pharmacienRepository.findById(id).orElseThrow(null);
        pharmacien.setNomPh(ph.getNomPh());
        pharmacien.setAge(ph.getAge());
        pharmacien.setSalaire(ph.getSalaire());
        pharmacien.setTelephone(ph.getTelephone());
        pharmacien.setDateRecrutement(ph.getDateRecrutement());
        pharmacien.setNomUniversite(ph.getNomUniversite());

        return pharmacienRepository.save(pharmacien) ;
    }

    @Override
    public void deletePhamacien(int id) {
pharmacienRepository.deleteById(id);
    }

    @Override
    public int nombrePharmacien() {
        return (int) pharmacienRepository.count();
    }
}

package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.MedecinRepository;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.services.MedecinServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@Slf4j
public class MedecinServicesImpl implements MedecinServices {
    @Autowired
    MedecinRepository medecinRepository;
    @Override
    public Medecin saveMedecin(Medecin p) {
        return medecinRepository.save(p);
    }

    @Override
    public List<Medecin> getAllMedecin() {
        return medecinRepository.findAll();
    }

    @Override
    public Optional<Medecin> getMedecintById(int id) {
        return medecinRepository.findById(id);
    }

    @Override
    public Medecin updateMedecin(int id, Medecin medecin) {
        Medecin medecin1 = medecinRepository.findById(id).orElse(null);
medecin1.setNom(medecin.getNom());
        medecin1.setPrixconsultation(medecin.getPrixconsultation());
        medecin1.setGradeMedecin(medecin.getGradeMedecin());
        medecin1.setSpecialite(medecin.getSpecialite());
        medecin1.setDate_embauche(medecin.getDate_embauche());
        medecin1.setNomUniversite(medecin.getNomUniversite());

        return     medecinRepository.save(medecin1);


    }

    @Override
    public void deleteMedecin(int id) {

medecinRepository.deleteById(id);
    }

    @Override
    public int nombreMedecin() {
        return (int) medecinRepository.count();
    }
}

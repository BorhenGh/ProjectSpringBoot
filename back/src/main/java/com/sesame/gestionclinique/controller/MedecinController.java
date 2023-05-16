package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.MedecinApi;
import com.sesame.gestionclinique.controller.api.PatientApi;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.services.MedecinServices;
import com.sesame.gestionclinique.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class MedecinController implements MedecinApi {
@Autowired
MedecinServices medecinServices;
        @Override
        public Medecin saveMedecin(Medecin p) {
            return medecinServices.saveMedecin(p);
        }

        @Override
        public List<Medecin> getAllMedecin() {
            return medecinServices.getAllMedecin();
        }

        @Override
        public Optional<Medecin> getMedecintById(int id) {
            return medecinServices.getMedecintById(id);
        }

        @Override
        public Medecin updateMedecin(int id, Medecin medecin) {
            return medecinServices.updateMedecin(id,medecin);
        }

        @Override
        public void deleteMedecin(int id) {
medecinServices.deleteMedecin(id);
        }

    @Override
    public int nombreMedecin() {
        return medecinServices.nombreMedecin();
    }
}

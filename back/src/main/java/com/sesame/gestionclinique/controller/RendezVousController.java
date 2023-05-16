package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.RendezVousApi;
import com.sesame.gestionclinique.model.RendezVous;
import com.sesame.gestionclinique.services.RendezVousServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@RestController
public class RendezVousController implements RendezVousApi {
    @Autowired
    RendezVousServices rendezVousServices;
    @Override
    public RendezVous saveRendezVous( RendezVous rendezVous) {
        return rendezVousServices.saveRendezVous(rendezVous);
    }

    @Override
    public List<RendezVous> getAllRendezVous() {
        return rendezVousServices.getAllRendezVous();
    }

    @Override
    public Optional<RendezVous> getRendezVousById(int id) {
        return rendezVousServices.getRendezVousById(id);
    }

    @Override
    public RendezVous updateRendezVous(int id, RendezVous rendezVous) {
        return rendezVousServices.updateRendezVous(id,rendezVous);
    }

    @Override
    public void deleteRendezVous(int id) {
rendezVousServices.deleteRendezVous(id);
    }

    @Override
    public void addRDVAndAssignMedAndPatient(RendezVous rdv, int idMedecin, int idPatient) {
rendezVousServices.addRDVAndAssignMedAndPatient(rdv,idMedecin,idPatient);
    }

    @Override
    public int getNbrRendezVousMedecin(int idMedecin) {
        return rendezVousServices.getNbrRendezVousMedecin(idMedecin);
    }

    @Override
    public int getRevenuMedecin(int idMedecin, Date startDate, Date endDate) {
        return rendezVousServices.getRevenuMedecin(idMedecin,startDate,endDate);
    }

    @Override
    public int nombreRendezVous() {
        return rendezVousServices.nombreRendezVous();
    }
}

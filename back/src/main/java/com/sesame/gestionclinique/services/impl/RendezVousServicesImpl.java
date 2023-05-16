package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.MedecinRepository;
import com.sesame.gestionclinique.dao.PatientRepository;
import com.sesame.gestionclinique.dao.RendezVousRepository;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.model.RendezVous;
import com.sesame.gestionclinique.model.Specialite;
import com.sesame.gestionclinique.services.RendezVousServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
@Slf4j
public class RendezVousServicesImpl implements RendezVousServices {

    @Autowired
    RendezVousRepository rendezVousRepository;
   @Autowired
    MedecinRepository medecinRepository;
   @Autowired
    PatientRepository patientRepository;


    @Override
    public RendezVous saveRendezVous(RendezVous rendezVous) {

        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public List<RendezVous> getAllRendezVous() {
        return rendezVousRepository.findAll();
    }

    @Override
    public Optional<RendezVous> getRendezVousById(int id) {
        return rendezVousRepository.findById(id);
    }

    @Override
    public RendezVous updateRendezVous(int id, RendezVous rendezVous) {
        RendezVous rendezVous1= rendezVousRepository.findById(id).orElse(null);
        rendezVous1.setDateRdv(rendezVous.getDateRdv());
        rendezVous1.setRemarque(rendezVous.getRemarque());
        rendezVous1.setMedecin(rendezVous.getMedecin());
        rendezVous1.setPatients(rendezVous.getPatients());


        return rendezVousRepository.save(rendezVous1);
    }

    @Override
    public void deleteRendezVous(int id) {
rendezVousRepository.deleteById(id);
    }

    @Override
    public void addRDVAndAssignMedAndPatient(RendezVous rdv, int idMedecin, int idPatient) {
        Medecin  medecin= medecinRepository.findById(idMedecin).orElse(null);
        Patient patient=patientRepository.findById(idPatient).orElse(null);
        rdv.setMedecin(medecin);
        rdv.setPatients(patient);
        rendezVousRepository.save(rdv);

    }



    @Override
    public int getNbrRendezVousMedecin(int idMedecin) {
        return rendezVousRepository.countByMedecinIdMedecinJPQL(idMedecin);
    }

    @Override
    public int getRevenuMedecin(int idMedecin, Date startDate, Date endDate) {
        return rendezVousRepository.getRevenuMedecin(idMedecin,startDate,endDate);
    }

    @Override
    public int nombreRendezVous() {
        return (int) rendezVousRepository.count();
    }
}

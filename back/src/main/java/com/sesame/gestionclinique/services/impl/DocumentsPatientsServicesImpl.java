package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.DocumentsPatientsRepository;
import com.sesame.gestionclinique.dao.PatientRepository;
import com.sesame.gestionclinique.model.DocumentsPatients;
import com.sesame.gestionclinique.services.DocumentsPatientsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DocumentsPatientsServicesImpl implements DocumentsPatientsServices {
    @Autowired
    DocumentsPatientsRepository documents;
    @Autowired
    PatientRepository patientRepository;


    @Override
    public DocumentsPatients saveDossier(DocumentsPatients p) {
        return documents.save(p);
    }

    @Override
    public List<DocumentsPatients> getAllDossier() {
        return documents.findAll();
    }

    @Override
    public Optional<DocumentsPatients> getDossierById(int id) {
        return documents.findById(id);
    }

    @Override
    public DocumentsPatients updateDossier(int id, DocumentsPatients documentsPatients) {
        DocumentsPatients d =documents.findById(id).orElseThrow(null);
       d.setEtat_maladie(documentsPatients.getEtat_maladie());

       d.setStartdate(documentsPatients.getStartdate());
       d.setPatients(documentsPatients.getPatients());
       d.setMedecin(documentsPatients.getMedecin());
       d.setRendezVous(documentsPatients.getRendezVous());
       d.setType_maladie(documentsPatients.getType_maladie());
       return documents.save(d);
    }

    @Override
    public void deleteDossier(int id) {
        documents.deleteById(id);
    }


}

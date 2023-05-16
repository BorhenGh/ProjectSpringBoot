package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.DocumentsPatients;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Patient;

import java.util.List;
import java.util.Optional;

public interface DocumentsPatientsServices {
    DocumentsPatients saveDossier(DocumentsPatients p);
    List<DocumentsPatients> getAllDossier();

    Optional<DocumentsPatients> getDossierById(int id);

    DocumentsPatients updateDossier(int id, DocumentsPatients documentsPatients);

    void deleteDossier(int id);

}

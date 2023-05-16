package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.DocumentsPatientsApi;
import com.sesame.gestionclinique.model.DocumentsPatients;
import com.sesame.gestionclinique.services.DocumentsPatientsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController

public class DocumentsPatientsController implements DocumentsPatientsApi {
    @Autowired
    DocumentsPatientsServices documentsPatientsServices;
    @Override
    public DocumentsPatients saveDossier(DocumentsPatients p) {
        return documentsPatientsServices.saveDossier(p);
    }

    @Override
    public List<DocumentsPatients> getAllDossier() {
        return documentsPatientsServices.getAllDossier();
    }

    @Override
    public Optional<DocumentsPatients> getDossierById(int id) {
        return documentsPatientsServices.getDossierById(id);
    }

    @Override
    public DocumentsPatients updateDossier(int id, DocumentsPatients documentsPatients) {
        return documentsPatientsServices.updateDossier(id,documentsPatients);
    }

    @Override
    public void deleteDossier(int id) {
documentsPatientsServices.deleteDossier(id);
    }


}

package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.DocumentsPatients;
import com.sesame.gestionclinique.model.Patient;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("documentsP")
public interface DocumentsPatientsApi {
    @PostMapping(value = "/create")
    DocumentsPatients saveDossier(@RequestBody DocumentsPatients p);
    @GetMapping(value = "/all")
    List<DocumentsPatients> getAllDossier();
@GetMapping(value = "/{id}")
    Optional<DocumentsPatients> getDossierById(@PathVariable int id);
@PutMapping(value = "/{id}")
    DocumentsPatients updateDossier(@PathVariable int id,@RequestBody DocumentsPatients documentsPatients);
@DeleteMapping(value = "/{id}")
    void deleteDossier(@PathVariable int id);
  

}

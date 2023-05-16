package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.DocumentsPatients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RestResource
public interface DocumentsPatientsRepository extends JpaRepository<DocumentsPatients,Integer> {
    List<DocumentsPatients> findByPatients(Integer idpatient);
}

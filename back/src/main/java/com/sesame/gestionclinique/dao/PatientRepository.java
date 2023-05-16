package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;


@RestResource
public interface PatientRepository extends JpaRepository<Patient,Integer> {

}

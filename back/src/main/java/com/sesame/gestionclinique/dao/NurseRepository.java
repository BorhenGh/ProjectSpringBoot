package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.Nurse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface NurseRepository extends JpaRepository<Nurse,Integer> {
}

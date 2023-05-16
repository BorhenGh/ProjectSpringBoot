package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.Pharmacien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface PharmacienRepository extends JpaRepository<Pharmacien,Integer> {
}

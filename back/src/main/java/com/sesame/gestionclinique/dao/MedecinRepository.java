package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface MedecinRepository extends JpaRepository<Medecin,Integer> {

}

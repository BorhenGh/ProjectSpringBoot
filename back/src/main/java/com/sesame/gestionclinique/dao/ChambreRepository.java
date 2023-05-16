package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.Chambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface ChambreRepository extends JpaRepository<Chambre,Integer> {
}

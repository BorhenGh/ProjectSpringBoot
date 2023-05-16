package com.sesame.gestionclinique.dao;

import com.sesame.gestionclinique.model.RendezVous;
import com.sesame.gestionclinique.model.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.Date;
import java.util.List;

@RestResource
public interface RendezVousRepository extends JpaRepository<RendezVous,Integer> {
    @Query("SELECT COUNT(r) FROM RendezVous r WHERE r.medecin.idmedecin = :idMedecin")
    int countByMedecinIdMedecinJPQL(@Param("idMedecin") int idMedecin);
    @Query("SELECT Sum(r.medecin.prixconsultation) "
            +"FROM RendezVous r "
            +"where r.medecin.idmedecin=:idMedecin "
            + "and r.dateRdv BETWEEN :date1 and :date2")
    int getRevenuMedecin(@Param("idMedecin") int idMedecin, @Param("date1") Date startDate, @Param("date2")Date endDate);

}

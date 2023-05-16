package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.model.RendezVous;
import com.sesame.gestionclinique.model.Specialite;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface RendezVousServices {
  RendezVous saveRendezVous(RendezVous rendezVous);
    List<RendezVous> getAllRendezVous();

    Optional<RendezVous> getRendezVousById(int id);

    RendezVous updateRendezVous(int id, RendezVous rendezVous);

    void deleteRendezVous(int id);
    void addRDVAndAssignMedAndPatient( RendezVous rdv,  int idMedecin, int idPatient);

     int getNbrRendezVousMedecin( int idMedecin);
    int getRevenuMedecin( int idMedecin,
                          Date startDate,
                        Date endDate);

int nombreRendezVous();
}

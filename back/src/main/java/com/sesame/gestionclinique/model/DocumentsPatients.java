package com.sesame.gestionclinique.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor

@AllArgsConstructor

public class DocumentsPatients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int idDocuments;
    String type_maladie;

   @Temporal(TemporalType.DATE)
    Date startdate;
    String etat_maladie;
@ManyToOne
@JoinColumn(name = "idpatient")
Patient patients;
@ManyToOne
@JoinColumn(name = "idrendezvous")
RendezVous rendezVous;
    @ManyToOne
    @JoinColumn(name = "idmedecin")
    Medecin medecin;

   public DocumentsPatients(String idDocuements){
       this.idDocuments=Integer.parseInt(idDocuements);
   }



}

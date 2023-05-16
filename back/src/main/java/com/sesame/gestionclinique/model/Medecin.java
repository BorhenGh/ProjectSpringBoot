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

public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idmedecin;
    private double prixconsultation;
    private String nom;
    @Enumerated(EnumType.STRING)
    Specialite specialite;
    @Enumerated(EnumType.STRING)
    GradeMedecin gradeMedecin;

    Date date_embauche;
    String nomUniversite;
    @JsonIgnore
    @OneToMany(mappedBy = "medecin")
    List<RendezVous>rendezVous;


    @JsonIgnore
   @OneToMany(mappedBy = "medecin")
    List<DocumentsPatients>documentsPatients;

    public Medecin(String id) {
        this.idmedecin = Integer.parseInt(id);
    }
    public static Medecin valueOf(int idrendezvous) {
        Medecin rdv = new Medecin();
        rdv.setIdmedecin(idrendezvous);
        return rdv;
    }
}

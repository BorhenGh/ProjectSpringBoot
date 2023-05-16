package com.sesame.gestionclinique.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pharmacien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    String nomPh;
    int age;
    int  telephone;
    @Temporal(TemporalType.DATE)
    private Date dateRecrutement;
    private double salaire;
    String nomUniversite;

}

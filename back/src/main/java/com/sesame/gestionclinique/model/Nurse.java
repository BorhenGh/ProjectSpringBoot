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
public class Nurse {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idnurse;
    String nomNurse;
    int age;
    int  telephone;
    @Temporal(TemporalType.DATE)
   private Date dateRecrutement;
    private double salaire;
    String nomUniversite;
    @Enumerated(EnumType.STRING)
    NurseGrade nurseGrade;

}

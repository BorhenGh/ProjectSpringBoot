package com.sesame.gestionclinique.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.apache.catalina.LifecycleState;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor

@AllArgsConstructor
public class Patient{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idpatient;
    private String nomPatient;
    private int telephone;
    @Column(unique=true)
    private int numeroCarte;
    @Column(unique = true)
    private int numeroCnss;

  private  Date dateNaissance;
    private String lieu_naissance;
    @JsonIgnore
 @OneToMany(mappedBy = "patients")
 List<DocumentsPatients> documentsPatientsList;
    @JsonIgnore
@OneToMany(mappedBy = "patients")
    List<RendezVous>rendezVous;
    @ManyToOne
    @JoinColumn(name = "idchambre")
    Chambre chambre;
    public Patient(String id) {
        this.idpatient = Integer.parseInt(id);
    }
    public static Patient valueOf(int idrendezvous) {
        Patient rdv = new Patient();
        rdv.setIdpatient(idrendezvous);
        return rdv;
    }
}

package com.sesame.gestionclinique.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chambre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idchambre;
    private int nombreDelit;
    @JsonIgnore
    @OneToMany(mappedBy = "chambre")
    List<Patient> patientList;
    public Chambre(String id){
        this.idchambre=Integer.parseInt(id);
    }

}

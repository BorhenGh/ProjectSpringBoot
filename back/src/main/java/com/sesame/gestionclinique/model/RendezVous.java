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

public class RendezVous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idrendezvous;
    @Temporal(TemporalType.DATE)
    private Date dateRdv;
    private String remarque;

    @ManyToOne
    @JoinColumn(name = "idpatient")
    Patient patients;
    @ManyToOne
    @JoinColumn(name = "idmedecin")
    Medecin medecin;
    @JsonIgnore
    @OneToMany(mappedBy = "rendezVous")
    List<DocumentsPatients> documentsPatients;
public RendezVous(String id){
    this.idrendezvous=Integer.parseInt(id);
}
    public static RendezVous valueOf(int idrendezvous) {
        RendezVous rdv = new RendezVous();
        rdv.setIdrendezvous(idrendezvous);
        return rdv;
    }
}

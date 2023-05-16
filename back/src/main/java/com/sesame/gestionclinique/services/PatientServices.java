package com.sesame.gestionclinique.services;

import com.sesame.gestionclinique.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientServices {
   Patient savePatient(Patient p);
    List<Patient> getAllPatients();

    Optional<Patient> getPatientById(int id);

    Patient updatePatient(int id, Patient patient);

    void deletePatient(int id);
    int nombrePatient();
}

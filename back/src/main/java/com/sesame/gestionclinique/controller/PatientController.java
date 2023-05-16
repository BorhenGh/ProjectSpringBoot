package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.PatientApi;
import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class PatientController implements PatientApi {
    @Autowired
    PatientServices patientServices;
    @Override
    public Patient savePatient(Patient p) {
        return patientServices.savePatient(p);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientServices.getAllPatients();
    }

    @Override
    public Optional<Patient> getPatientById(int id) {
        return patientServices.getPatientById(id);
    }

    @Override
    public Patient updatePatient(int id, Patient patient) {
        return patientServices.updatePatient(id,patient);
    }

    @Override
    public void deletePatient(int id) {
patientServices.deletePatient(id);
    }

    @Override
    public int nombrePatient() {
        return patientServices.nombrePatient();
    }
}

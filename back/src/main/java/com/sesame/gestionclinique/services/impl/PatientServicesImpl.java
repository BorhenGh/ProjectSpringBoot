package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.PatientRepository;
import com.sesame.gestionclinique.model.Patient;
import com.sesame.gestionclinique.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PatientServicesImpl implements PatientServices {
    @Autowired
    PatientRepository patientRepository;
    @Override
    public Patient savePatient(Patient p){
        return patientRepository.save(p);
    }
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Optional<Patient> getPatientById(int id) {
        return patientRepository.findById(id);
    }

    @Override
    public Patient updatePatient(int id, Patient patient) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient avec Id" +id+"Not Found "));
   existingPatient.setNomPatient(patient.getNomPatient());
   existingPatient.setTelephone(patient.getTelephone());
   existingPatient.setDateNaissance(patient.getDateNaissance());
   existingPatient.setNumeroCarte(patient.getNumeroCarte());
   existingPatient.setLieu_naissance(patient.getLieu_naissance());
   existingPatient.setChambre(patient.getChambre());
return  patientRepository.save(existingPatient);
    }

    @Override
    public void deletePatient(int id) {
patientRepository.deleteById(id);
    }

    @Override
    public int nombrePatient() {
        return (int) patientRepository.count();
    }

}

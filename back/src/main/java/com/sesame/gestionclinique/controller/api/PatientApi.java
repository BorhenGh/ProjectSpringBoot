package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.Patient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("patients")
public interface PatientApi {
    @PostMapping(value = "/create")
    public Patient savePatient(@RequestBody Patient p);
    @GetMapping(value = "/All")
    List<Patient> getAllPatients();
@GetMapping(value = "/{id}")
    Optional<Patient> getPatientById(@PathVariable int id);
@PutMapping(value = "/{id}")
    Patient updatePatient(@PathVariable  int id, @RequestBody Patient patient);
@DeleteMapping(value = "delete/{id}")
    void deletePatient(@PathVariable int id);
@GetMapping(value = "/countPatient")
int nombrePatient();
}

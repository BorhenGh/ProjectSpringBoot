package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.NurseRepository;
import com.sesame.gestionclinique.model.Medecin;
import com.sesame.gestionclinique.model.Nurse;
import com.sesame.gestionclinique.services.NurseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NurseServiceImpl implements NurseServices {
    @Autowired
    NurseRepository nurseRepository;
    @Override
    public Nurse saveNurse(Nurse p) {
        return nurseRepository.save(p);
    }

    @Override
    public List<Nurse> getAllNurse() {
        return nurseRepository.findAll();
    }

    @Override
    public Optional<Nurse> getNurseById(int id) {
        return nurseRepository.findById(id);
    }

    @Override
    public Nurse updateNurse(int id, Nurse nurse) {
        Nurse nurse1= nurseRepository.findById(id).orElseThrow(null);
        nurse1.setNomNurse(nurse.getNomNurse());
        nurse1.setAge(nurse.getAge());
        nurse1.setSalaire(nurse.getSalaire());
        nurse1.setTelephone(nurse.getTelephone());
        nurse1.setDateRecrutement(nurse.getDateRecrutement());
        nurse1.setNomUniversite(nurse.getNomUniversite());
        nurse1.setNurseGrade(nurse.getNurseGrade());
        return nurseRepository.save(nurse1);

    }

    @Override
    public void deleteNurse(int id) {
nurseRepository.deleteById(id);
    }

    @Override
    public int nombreNures() {
        return (int) nurseRepository.count();
    }
}

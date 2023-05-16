package com.sesame.gestionclinique.controller;

import com.sesame.gestionclinique.controller.api.NurseApi;
import com.sesame.gestionclinique.model.Nurse;
import com.sesame.gestionclinique.services.NurseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class NurseController implements NurseApi {
    @Autowired
    NurseServices nurseServices;
    @Override
    public Nurse saveNurse(Nurse p) {
        return nurseServices.saveNurse(p);
    }

    @Override
    public List<Nurse> getAllNurse() {
        return nurseServices.getAllNurse();
    }

    @Override
    public Optional<Nurse> getNurseById(int id) {
        return nurseServices.getNurseById(id);
    }

    @Override
    public Nurse updateNurse(int id, Nurse nurse) {
        return nurseServices.updateNurse(id,nurse);
    }

    @Override
    public void deleteNurse(int id) {
nurseServices.deleteNurse(id);
    }

    @Override
    public int nombreNures() {
        return nurseServices.nombreNures();
    }
}

package com.sesame.gestionclinique.services.impl;

import com.sesame.gestionclinique.dao.ChambreRepository;
import com.sesame.gestionclinique.model.Chambre;
import com.sesame.gestionclinique.services.ChambreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ChambreServicesImpl implements ChambreServices {
    @Autowired
    ChambreRepository chambreRepository;
    @Override
    public Chambre saveChambre(Chambre ch) {
        return chambreRepository.save(ch);
    }

    @Override
    public List<Chambre> getAllChambre() {
        return chambreRepository.findAll();
    }

    @Override
    public Optional<Chambre> getChambreById(int id) {
        return chambreRepository.findById(id);
    }

    @Override
    public Chambre updateChambre(int id, Chambre ch) {
        Chambre chambre= chambreRepository.findById(id).orElseThrow(null);
        chambre.setNombreDelit(ch.getNombreDelit());
        return chambreRepository.save(chambre);
    }

    @Override
    public void deleteChambre(int id) {
chambreRepository.deleteById(id);
    }

    @Override
    public int nombreRoom() {
        return (int) chambreRepository.count();
    }
}

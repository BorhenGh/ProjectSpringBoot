package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.Medecin;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("Med")
public interface MedecinApi {
    @PostMapping(value = "/create")
    Medecin saveMedecin(@RequestBody Medecin p);
    @GetMapping(value = "/All")
    List<Medecin> getAllMedecin();
@GetMapping(value = "/{id}")
    Optional<Medecin> getMedecintById(@PathVariable int id);
@PutMapping(value = "/{id}")
    Medecin updateMedecin(@PathVariable int id,@RequestBody Medecin medecin);
@DeleteMapping(value = "/delete/{id}")
    void deleteMedecin(@PathVariable int id);
@GetMapping(value = "/getnombreMedecin")
 int nombreMedecin();
}

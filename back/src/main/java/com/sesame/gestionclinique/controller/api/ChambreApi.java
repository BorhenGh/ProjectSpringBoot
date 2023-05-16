package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.Chambre;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("chambres")
public interface ChambreApi {
    @PostMapping(value = "/create")
    Chambre saveChambre(@RequestBody Chambre ch);
    @GetMapping(value = "/all")
    List<Chambre> getAllChambre();
@GetMapping(value = "/{id}")
    Optional<Chambre> getChambreById(@PathVariable int id);
@PutMapping(value = "/{id}")
    Chambre updateChambre(@PathVariable int id,@RequestBody Chambre ch);
@DeleteMapping(value = "/{id}")
    void deleteChambre(@PathVariable int id);
@GetMapping(value = "/countRoom")
int nombreRoom();
}

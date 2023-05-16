package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.Pharmacien;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("pharm")
public interface PharmacienApi {
    @PostMapping(value = "/create")
    Pharmacien save (@RequestBody Pharmacien ph);
    @GetMapping(value = "/all")
    List<Pharmacien> findallPharmacien();
    @GetMapping(value = "/{id}")
    Optional<Pharmacien> getPharmacienbyid(@PathVariable int id);
    @PutMapping(value = "/{id}")
    Pharmacien updatePhamacien(@PathVariable int id,@RequestBody Pharmacien ph);
    @DeleteMapping(value = "/{id}")
    void deletePhamacien(@PathVariable int id);
    @GetMapping(value = "/countPh")
    int nombrePharmacien();
}

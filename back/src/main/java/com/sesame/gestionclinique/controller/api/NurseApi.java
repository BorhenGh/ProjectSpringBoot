package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.Nurse;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("nurses")
public interface NurseApi {
    @PostMapping(value = "/create")
    Nurse saveNurse(@RequestBody Nurse p);
    @GetMapping(value = "/all")
    List<Nurse> getAllNurse();
@GetMapping(value = "/{id}")
    Optional<Nurse> getNurseById(@PathVariable int id);
@PutMapping(value = "/{id}")
    Nurse updateNurse(@PathVariable int id,@RequestBody Nurse nurse);
@DeleteMapping(value = "/{id}")
    void deleteNurse(@PathVariable int id);
@GetMapping(value = "/countNurses")
int nombreNures();
}

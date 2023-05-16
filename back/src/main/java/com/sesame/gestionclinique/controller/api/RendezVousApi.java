package com.sesame.gestionclinique.controller.api;

import com.sesame.gestionclinique.model.RendezVous;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@RequestMapping("rdv")
public interface RendezVousApi {
    @PostMapping(value = "/create")
    RendezVous saveRendezVous(@RequestBody RendezVous rendezVous);
    @GetMapping(value = "/All")
    List<RendezVous> getAllRendezVous();
@GetMapping(value = "/{id}")
    Optional<RendezVous> getRendezVousById(@PathVariable int id);
@PutMapping(value = "/{id}")
    RendezVous updateRendezVous(@PathVariable int id, @RequestBody RendezVous rendezVous);
@DeleteMapping(value = "/{id}")
    void deleteRendezVous(@PathVariable int id);
    @PostMapping("/addRDVAndAssignMedAndPatient/{idMedecin}/{idPatient}")
    void addRDVAndAssignMedAndPatient(@RequestBody RendezVous rdv, @PathVariable   int idMedecin, @PathVariable int idPatient);
    @GetMapping(value = "/getNbrRendezVousMedecin/{idMedecin}")
    int getNbrRendezVousMedecin(@PathVariable int idMedecin);
    @GetMapping(value = "/getRevenuMedecin/{idMedecin}/{startDate}/{endDate}")
    int getRevenuMedecin( @PathVariable(value = "idMedecin") int idMedecin,
                          @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                          @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate);
    @GetMapping(value = "/countRendezvous")
    int nombreRendezVous();
}

package com.recode.agencialaercio.controller;

import com.recode.agencialaercio.model.Viagem;
import com.recode.agencialaercio.service.ViagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/viagem")
@CrossOrigin
public class ViagemController {
    @Autowired
    private ViagemService viagemService;

    @PostMapping("/add")
    public String add(@RequestBody Viagem viagem){
        viagemService.saveViagem(viagem);
        return "Nova viagem adicionada!";
    }

    @DeleteMapping("/delete")
    public String deleteViagem(@RequestBody Viagem viagem){
        viagemService.delete(viagem);
        return "Usuário " + viagem.getId() +" Deletado";
    }

    @GetMapping("/getAll")
    public List<Viagem> list(){
        return viagemService.getAllViagens();
    }
}
package com.recode.agencialaercio.service;

import com.recode.agencialaercio.model.Viagem;

import java.util.List;

public interface ViagemService {
    public Viagem saveViagem(Viagem viagem);
    public List<Viagem> getAllViagens();
    public void delete(Viagem viagem);
}

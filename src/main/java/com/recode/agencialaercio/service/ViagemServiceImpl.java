package com.recode.agencialaercio.service;

import com.recode.agencialaercio.model.Viagem;
import com.recode.agencialaercio.respository.ViagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViagemServiceImpl implements ViagemService{
    @Autowired
    private ViagemRepository viagemRepository;

    @Override
    public Viagem saveViagem(Viagem viagem) {
        return viagemRepository.save(viagem);
    }

    @Override
    public List<Viagem> getAllViagens() {
        return viagemRepository.findAll();
    }

    @Override
    public void delete(Viagem viagem) {
        /*
        List<Viagem> viagens = viagemRepository.findAll();
        Viagem viagem = viagens.get(Math.toIntExact(id));
        */
        viagemRepository.delete(viagem);
        /*
        var isRemoved = this.posts.removeIf(post -> post.getId().equals(id));
        return isRemoved;*/

    }
}

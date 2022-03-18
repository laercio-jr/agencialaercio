package com.recode.agencialaercio.respository;

import com.recode.agencialaercio.model.Viagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViagemRepository extends JpaRepository<Viagem,Integer> {
}
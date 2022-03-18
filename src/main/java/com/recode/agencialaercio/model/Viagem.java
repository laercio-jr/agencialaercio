package com.recode.agencialaercio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Viagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String viajante;
    private String destino;
    private boolean temGuia;

    public Viagem() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getViajante() {
        return viajante;
    }

    public void setViajante(String viajante) {
        this.viajante = viajante;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public boolean isTemGuia() {
        return temGuia;
    }

    public void setTemGuia(boolean temGuia) {
        this.temGuia = temGuia;
    }
}

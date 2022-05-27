package com.choosehair.choosehair.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;


@Entity
@Table(name = "cabelo")
public class Cabelo implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cab;
	
	@Column(name = "descricao", nullable = true)
	private String descricao;
	
	
	@Column(name = "genero", nullable = true)
	private String genero;
	
	@Column(name = "foto", nullable = true)
	private String foto;
	
	@Column(name = "tamanho", nullable = true)
	private String tamanho;

	public Cabelo() {
	}
	

	public Cabelo(Integer id_cab, String descricao, String genero, String foto, String tamanho) {
		this.id_cab = id_cab;
		this.descricao = descricao;
		this.genero = genero;
		this.foto = foto;
		this.tamanho = tamanho;
	}


	public Integer getId_cab() {
		return id_cab;
	}

	public void setId_cab(Integer id_cab) {
		this.id_cab = id_cab;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id_cab);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cabelo other = (Cabelo) obj;
		return Objects.equals(id_cab, other.id_cab);
	}

}

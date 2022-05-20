package com.choosehair.choosehair.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Cliente")
public class Cliente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id_cli;
	
	@Column(name = "nome", nullable = true)
	private String nome;
	
	@Column(name = "nome", nullable = true)
	private String cpf;
	
	@Column(name = "nome", nullable = true)
	private String email;
	
	@Column(name = "nome", nullable = true)
	private String senha;


	public Cliente() {
	}


	public Cliente(Integer id, String nome, String cpf, String email, String senha) {
		this.id_cli = id;
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
	}


	public Integer getId() {
		return id_cli;
	}


	public Integer getId_cli() {
		return id_cli;
	}


	public void setId_cli(Integer id_cli) {
		this.id_cli = id_cli;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id_cli);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(id_cli, other.id_cli);
	}
}

package com.choosehair.choosehair.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Cabeleireiro")
public class Cabeleireiro implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cabe;
	
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private String foto;
	
	@Column(name = "nome", nullable = true)
	private String nome;
	
	@Column(name = "cpf", nullable = true)
	private String cpf;
	
	@Column(name = "email", nullable = true)
	private String email;
	
	@Column(name = "senha", nullable = true)
	private String senha;
	
	@Column(name = "logradouro", nullable = true)
	private String logradouro;
	
	@Column(name = "numero", nullable = true)
	private Integer numero;
	
	@Column(name = "bairro", nullable = true)
	private String bairro;
	
	@Column(name = "cidade", nullable = true)
	private String cidade;
	
	@Column(name = "telefone", nullable = true)
	private String telefone;
	
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "cabelo_profi",
    joinColumns = @JoinColumn(name = "fk_id_cab_pro"),
    inverseJoinColumns = @JoinColumn(name = "fk_id_cabe_cab_pro"))
    private Set<Cabelo> cabelo = new HashSet<>(); 
	

	public Cabeleireiro() {
	}

	public Cabeleireiro(Integer id_cabe, String foto, String nome, String cpf, String email, String senha,
			String logradouro, Integer numero, String bairro, String cidade, String telefone) {
		this.id_cabe = id_cabe;
		this.foto = foto;
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
		this.logradouro = logradouro;
		this.numero = numero;
		this.bairro = bairro;
		this.cidade = cidade;
		this.telefone = telefone;
	}

	public Integer getId_cabe() {
		return id_cabe;
	}

	public void setId_cabe(Integer id_cabe) {
		this.id_cabe = id_cabe;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
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

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id_cabe);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cabeleireiro other = (Cabeleireiro) obj;
		return Objects.equals(id_cabe, other.id_cabe);
	}
}

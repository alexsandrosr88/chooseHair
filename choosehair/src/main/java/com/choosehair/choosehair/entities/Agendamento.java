package com.choosehair.choosehair.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "agendamento")
public class Agendamento implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_agen;
	
	@Column(nullable = true)
	private LocalTime horario;
	
    @Column(name = "dtagendada")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dt_agendada;
	
	@Column(name = "confirmado", nullable = true)
	private Boolean confirmado;

	public Agendamento() {
	}

	public Agendamento(Integer id_agen, LocalTime horario, LocalDate dt_agendada, Boolean confirmado) {
		this.id_agen = id_agen;
		this.horario = horario;
		this.dt_agendada = dt_agendada;
		this.confirmado = confirmado;
	}



	public Integer getId_agen() {
		return id_agen;
	}

	public void setId_agen(Integer id_agen) {
		this.id_agen = id_agen;
	}

	public LocalTime getHorario() {
		return horario;
	}

	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}

	public LocalDate getDt_agendada() {
		return dt_agendada;
	}

	public void setDt_agendada(LocalDate dt_agendada) {
		this.dt_agendada = dt_agendada;
	}

	public Boolean getConfirmado() {
		return confirmado;
	}

	public void setConfirmado(Boolean confirmado) {
		this.confirmado = confirmado;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id_agen);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Agendamento other = (Agendamento) obj;
		return Objects.equals(id_agen, other.id_agen);
	}
}

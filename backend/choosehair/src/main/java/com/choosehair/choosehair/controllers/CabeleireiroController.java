package com.choosehair.choosehair.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.choosehair.choosehair.entities.Cabeleireiro;
import com.choosehair.choosehair.repositories.CabeleireiroRepository;

@RestController
@RequestMapping(value = "/cabeleireiros")
public class CabeleireiroController {
	
	@Autowired
	private CabeleireiroRepository repoCabe;
	
	@GetMapping
	public ResponseEntity<List<Cabeleireiro>> findAll(){
		List<Cabeleireiro> list = repoCabe.findAll();
		return ResponseEntity.ok().body(list);
	}
}

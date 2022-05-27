package com.choosehair.choosehair.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.choosehair.choosehair.entities.Cabelo;
import com.choosehair.choosehair.repositories.CabeloRepository;

@RestController
@RequestMapping(value = "/cabelos")
public class CabeloController {
	
	@Autowired
	private CabeloRepository repoCab;

//	@GetMapping
//	public ResponseEntity<List<Cabelo>>findBySize(@RequestParam String tamanho){
//		List<Cabelo> list = repoCab.findHairSize(tamanho);
//		return ResponseEntity.ok(list);
//	}
	
	@GetMapping
	public ResponseEntity<List<Cabelo>>findBySizeGender(@RequestParam String genero, @RequestParam String tamanho){
		List<Cabelo> list = repoCab.findHairSizeGender(genero, tamanho);
		return ResponseEntity.ok(list);
	}
}

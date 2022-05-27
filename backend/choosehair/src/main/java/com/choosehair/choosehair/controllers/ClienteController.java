package com.choosehair.choosehair.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.choosehair.choosehair.entities.Cliente;
import com.choosehair.choosehair.repositories.ClienteRepository;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository repoCli;

	@GetMapping
	public ResponseEntity<List <Cliente>> findAll(){
		List<Cliente> list = repoCli.findAll();
			return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<Cliente> insert(@RequestBody Cliente cli){
		cli = repoCli.save(cli);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(cli.getId()).toUri();
		
		return ResponseEntity.created(uri).body(cli);		
	}
}

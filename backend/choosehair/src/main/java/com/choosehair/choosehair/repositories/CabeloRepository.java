package com.choosehair.choosehair.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.choosehair.choosehair.entities.Cabelo;

@Repository
public interface CabeloRepository extends JpaRepository<Cabelo, Integer> {

	   @Query(nativeQuery = true, value = "select * from cabelo as c where tamanho = ?1")
			   List<Cabelo> findHairSize(String  tamanho);
	   
	   @Query(nativeQuery = true, value = "select * from cabelo as c where genero = ?1 and tamanho = ?2")
	   List<Cabelo> findHairSizeGender(String  genero, String tamanho);
}
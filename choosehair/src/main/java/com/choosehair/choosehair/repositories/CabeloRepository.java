package com.choosehair.choosehair.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.choosehair.choosehair.entities.Cabelo;

@Repository
public interface CabeloRepository extends JpaRepository<Cabelo, Integer> {

}
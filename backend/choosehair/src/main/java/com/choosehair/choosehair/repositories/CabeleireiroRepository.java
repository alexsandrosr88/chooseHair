package com.choosehair.choosehair.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.choosehair.choosehair.entities.Cabeleireiro;

@Repository
public interface CabeleireiroRepository extends JpaRepository<Cabeleireiro, Integer> {

}

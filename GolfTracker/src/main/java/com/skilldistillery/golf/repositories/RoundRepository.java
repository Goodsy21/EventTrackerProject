package com.skilldistillery.golf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skilldistillery.golf.entities.Round;

public interface RoundRepository extends JpaRepository<Round, Integer>{

}

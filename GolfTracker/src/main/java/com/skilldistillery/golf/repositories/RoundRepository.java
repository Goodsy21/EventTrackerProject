package com.skilldistillery.golf.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.golf.entities.Round;

public interface RoundRepository extends JpaRepository<Round, Integer>{
	List<Round> findByCourse(String courseId);
}

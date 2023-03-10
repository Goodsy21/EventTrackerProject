package com.skilldistillery.golf.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.golf.entities.Round;

public interface RoundService {
	Optional<Round> findById(Integer roundId);
	List<Round> allRounds();
	Round createRound(Round round);
	Round updateById(Integer roundId, Round round);
	boolean deleteRound(Integer roundId);
	List<Round> findByCourse(String courseId);
}

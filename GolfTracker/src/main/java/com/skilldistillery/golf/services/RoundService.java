package com.skilldistillery.golf.services;

import java.util.List;

import com.skilldistillery.golf.entities.Round;

public interface RoundService {
	Round getRound(int roundId);
	List<Round> allRounds();
	Round createRound(Round newRound);
	Round updateRound(int roundId);
	boolean deleteRound(int roundId);
	List<Round> getRoundByCourse(String course);
}

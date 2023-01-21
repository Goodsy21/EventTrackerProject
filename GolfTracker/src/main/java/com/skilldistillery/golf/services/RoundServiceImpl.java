package com.skilldistillery.golf.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.golf.entities.Round;
import com.skilldistillery.golf.repositories.RoundRepository;

@Service
public class RoundServiceImpl implements RoundService {

	@Autowired
	RoundRepository roundRepo;

	@Override
	public Optional<Round> findById(Integer roundId) {
		return roundRepo.findById(roundId);
	}

	@Override
	public List<Round> allRounds() {
		return roundRepo.findAll();
	}

	@Override
	public Round createRound(Round newRound) {
		Round created = roundRepo.saveAndFlush(newRound);
		return created;
	}

	@Override
	public Optional <Round> updateById(Integer roundId) {
	Optional <Round> update = roundRepo.findById(roundId);
	return update;
	}

	@Override
	public boolean deleteRound(Integer roundId) {
		boolean deleted = false;
		Optional<Round> deleteRd = roundRepo.findById(roundId);
		if(deleteRd.isPresent()) {
			Round deleteMe = deleteRd.get();
			roundRepo.delete(deleteMe);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<Round> findByCourse(String course) {
		List<Round> matches = roundRepo.findAll();
		for (Round round : matches) {
			if (round.getCourse() == course) {
				matches.add(round);
			} else {
				return null;
			}
		}
		return matches;
	}

}

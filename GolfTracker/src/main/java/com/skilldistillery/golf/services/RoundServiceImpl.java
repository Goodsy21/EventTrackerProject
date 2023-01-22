package com.skilldistillery.golf.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skilldistillery.golf.entities.Round;
import com.skilldistillery.golf.repositories.RoundRepository;

@Service
@Transactional
public class RoundServiceImpl implements RoundService {

	@Autowired
	RoundRepository roundRepo;

	@Override
	public List<Round> allRounds() {
		return roundRepo.findAll();
	}

	@Override
	public Round createRound(Round round) {
		Round created = new Round();
		created.setId(round.getId());;
		created.setCourse(round.getCourse());
		created.setScore(round.getScore());
		created.setLostBalls(round.getLostBalls());
		created.setGreenFee(round.getGreenFee());
		created.setBeveragesConsumed(round.getBeveragesConsumed());
		return created;
	}

	@Override
	public Round updateById(Integer roundId, Round round) {
	Optional<Round> update = roundRepo.findById(roundId);
		if(update.isPresent()) {
			Round updateMe = update.get();
			updateMe.setCourse(round.getCourse());
			updateMe.setScore(round.getScore());
			updateMe.setLostBalls(round.getLostBalls());
			updateMe.setGreenFee(round.getGreenFee());
			updateMe.setBeveragesConsumed(round.getBeveragesConsumed());
			return updateMe;
		}
	return null;
	}
	
	@Override
	public Optional<Round> findById(Integer roundId) {
		return roundRepo.findById(roundId);
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

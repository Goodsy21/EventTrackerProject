package com.skilldistillery.golf.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.golf.entities.Round;
import com.skilldistillery.golf.repositories.RoundRepository;
@Service
public class RoundServiceImpl implements RoundService{

	@Autowired
	RoundRepository roundRepo;
	
	@Override
	public Round getRound(int roundId) {
		
		return null;
	}

	@Override
	public List<Round> allRounds() {
		// TODO Auto-generated method stub
		return roundRepo.findAll();
	}

	@Override
	public Round createRound() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Round updateRound(int roundId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteRound(int roundId) {
		// TODO Auto-generated method stub
		return false;
	}

}

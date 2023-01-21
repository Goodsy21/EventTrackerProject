package com.skilldistillery.golf.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.golf.entities.Round;
import com.skilldistillery.golf.services.RoundService;

@RestController
@RequestMapping("api")
public class RoundController {

	@Autowired
	private RoundService roundServ;
	
	@GetMapping("rounds")
	public List<Round> listAllRounds() {
		return roundServ.allRounds();
	}
	
	@PostMapping("rounds")
	public Round createRound() {
		return roundServ.createRound();
	}
}

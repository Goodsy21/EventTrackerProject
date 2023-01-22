package com.skilldistillery.golf.controllers;

import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<Round> findAllRounds() {
		return roundServ.allRounds();
	}

	@GetMapping("rounds/{id}")
	public Round findById(@PathVariable Integer id, HttpServletResponse res) {
		Optional<Round> search = roundServ.findById(id);
		if (search.isPresent()) {
			Round found = search.get();
			return found;
		} else {
			res.setStatus(404);
		}
		return null;
	}

	@GetMapping("rounds/course")
	public List<Round> findByCourse(String course, HttpServletResponse res, HttpServletRequest req) {
		List<Round> courseRounds;
		courseRounds = roundServ.findByCourse(course);
		if (courseRounds.isEmpty()) {
			res.setStatus(404);
		}
		return courseRounds;
	}

	@PostMapping("rounds")
	public Round create(@RequestBody Round round, HttpServletResponse res, HttpServletRequest req) {
		Round created;
		try {
			created = roundServ.createRound(round);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(created.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
			created = null;
		}
		return created;
	}

	@DeleteMapping("rounds/{id}")
	public void deleteRound(@PathVariable("id") Integer roundId, HttpServletResponse res) {
		boolean delete = roundServ.deleteRound(roundId);
		if (delete == true) {
			res.setStatus(201);
		} else {
			res.setStatus(404);
		}
	}
	
	@PutMapping("rounds/{id}")
	public Round update(@PathVariable Integer id, @RequestBody Round round) {
		return roundServ.updateById(id, round);
	}
}
package com.skilldistillery.golf.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Round {

	@Id
	@GeneratedValue
	private int id;
	
	private int score;
	
	private String course;
	
	@Column(name="lost_balls")
	private int lostBalls;


	public Round() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public int getLostBalls() {
		return lostBalls;
	}

	public void setLostBalls(int lostBalls) {
		this.lostBalls = lostBalls;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Round other = (Round) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Round [id=" + id + ", score=" + score + ", course=" + course + ", lostBalls=" + lostBalls + "]";
	}
}

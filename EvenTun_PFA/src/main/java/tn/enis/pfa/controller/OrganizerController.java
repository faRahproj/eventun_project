package tn.enis.pfa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.enis.pfa.entities.Organizer;
import tn.enis.pfa.exception.ResourceNotFoundException;
import tn.enis.pfa.repositories.OrganizerRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class OrganizerController {
	@Autowired // to inject this repository by spring container
	private OrganizerRepository organizerRepository;

	// get all organizers
	@GetMapping("/organizers")
	public List<Organizer> getAllOrganizer() {
		return organizerRepository.findAll();
	}

	// create organizer rest api
	@PostMapping("/organizers")
	public Organizer createOrganizer(@RequestBody Organizer organizer) {
		return organizerRepository.save(organizer);
	}

	// get organizer by id rest api
	@GetMapping("/organizers/{id}")
	public ResponseEntity<Organizer> getOrganizerById(@PathVariable Long id) {
		Organizer organizer = organizerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Organizer not exist with id:" + id));
		return ResponseEntity.ok(organizer);
	}

	@PutMapping(value = "/organizers/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Organizer> updateOrganizer(@PathVariable Long id, @RequestBody Organizer organizerDetails) {
		Organizer organizer = organizerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("organizer not exist with id:" + id));

		organizer.setFirstName(organizerDetails.getFirstName());

		Organizer updateOrganizer = organizerRepository.save(organizer);
		return ResponseEntity.ok(updateOrganizer);
	}

//delete organizers rest api
	@DeleteMapping("/organizers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrganizer(@PathVariable Long id) {
		Organizer organizer = organizerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Organizer not exist with id:" + id));
		organizerRepository.delete(organizer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}}


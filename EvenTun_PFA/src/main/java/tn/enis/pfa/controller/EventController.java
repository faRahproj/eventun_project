package tn.enis.pfa.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
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

import tn.enis.pfa.entities.Category;
import tn.enis.pfa.entities.Event;
import tn.enis.pfa.entities.User;
import tn.enis.pfa.exception.ResourceNotFoundException;
import tn.enis.pfa.repositories.CategoryRepository;
import tn.enis.pfa.repositories.EventRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EventController {
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	private EventRepository eventRepository;

	@GetMapping("/events")
	public List<Event> events() {
		return eventRepository.findAll();
	}

	@GetMapping("/event/{family}")
	public ResponseEntity<Page<Event>> findbyCat(Pageable pageable, @PathVariable String family) {
		return new ResponseEntity<>(eventRepository.findAllEvents(pageable, family), HttpStatus.OK);
	}

	// create event rest api
	@PostMapping("/events")
	public Event createEvent(@RequestBody Event event){
		return eventRepository.save(event);
	}

	// get event by id rest api
	@GetMapping("/events/{id}")
	public ResponseEntity<Event> getEventById1(@PathVariable Long id) {
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("event not exist with id:" + id));
		return ResponseEntity.ok(event);
	}

	// update event rest api

	@PutMapping(value = "/events/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("event not exist with id:" + id));

		event.setTitle(eventDetails.getTitle());
		event.setDateStart(eventDetails.getDateStart());
		event.setDateEnd(eventDetails.getDateEnd());
		event.setPrix(eventDetails.getPrix());
		event.setLocation(eventDetails.getLocation());
		event.setNbrticket(eventDetails.getNbrticket());
		event.setDescription(eventDetails.getDescription());
		event.setImage(eventDetails.getImage());
		Event updateEvent = eventRepository.save(event);
		return ResponseEntity.ok(updateEvent);
	}

	// delete event rest api
	@DeleteMapping("/events/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id) {
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Eventnot exist with id:" + id));
		eventRepository.delete(event);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

	@GetMapping("/locations")
	public  ResponseEntity<Set<String>> findAllLocation() {
		return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Tunis", "Ariana", "Beja", "Ben Arous", "Bezert", "Gabes", "Gafsa", "Jandouba", "Kairouen", "Kasserine", "Kabeli", "Le Kef", "Mahdia", "La Manouba", "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi BouZid", "Siliana", "Sousse", "Tataouin", "Tozeur", "Zaghouen")), HttpStatus.OK);
	}

	public Collection<Event> findAll() {
		return (Collection<Event>) eventRepository.findAll();
	}

	@GetMapping("/events/search/{searchText}")
	public ResponseEntity<Page<Event>> findAll(Pageable pageable, @PathVariable String searchText) {
		return new ResponseEntity<>(eventRepository.findAllEvents(pageable, searchText), HttpStatus.OK);
	}
}

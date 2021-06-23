package tn.enis.pfa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import tn.enis.pfa.entities.User;
import tn.enis.pfa.exception.ResourceNotFoundException;
import tn.enis.pfa.repositories.UserRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/secure/test")
public class UserController {
	@Autowired // to inject this repository by spring container
	private UserRepository userRepository;

	// get all users
	@GetMapping("/user")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}


	// create user rest api
	@PostMapping("/users/register")
	public String createUser(@RequestBody User user) {
		userRepository.save(user);
		return "added ....";
	}


	// get user by id rest api
	@GetMapping("/users/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
		User user = userRepository.findByEmail(email);
		if (user == null ){
			return new  ResponseEntity(HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(user);
	}

	// update user by id
	@PutMapping(value = "/users/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));

		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());
		user.setCountry(userDetails.getCountry());
		user.setGender(userDetails.getGender());
		user.setPassword(userDetails.getPassword());
		

		User updateUser = userRepository.save(user);
		return ResponseEntity.ok(updateUser);
	}

	// delete user rest api
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

package tn.enis.pfa.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

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

import tn.enis.pfa.entities.Category;
import tn.enis.pfa.exception.ResourceNotFoundException;
import tn.enis.pfa.repositories.CategoryRepository;



@CrossOrigin(origins="",allowedHeaders = "")
@RestController
@RequestMapping("/api/v1/")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> categories() {
        return categoryRepository.findAll();
    }


    @PostMapping("/category")
    public Category createEvent(@RequestBody Category category) {
        return categoryRepository.save(category);
    }


    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategoryById1(@PathVariable Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category not exist with id:" + id));
        return ResponseEntity.ok(category);
    }
    @CrossOrigin(origins="",allowedHeaders = "")


    @PutMapping(value = "/category/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category categorytDetails) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("event not exist with id:" + id));

        category.setNameCategory(categorytDetails.getNameCategory());
        Category updateCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updateCategory);
    }
    @CrossOrigin(origins="",allowedHeaders = "")
    // delete event rest api
    @DeleteMapping("/category/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not exist with id:" + id));
        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

    @GetMapping("/categories")
    public  ResponseEntity<Set<String>> findAllNameCategory() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Tunis", "Ariana", "Beja", "Ben Arous", "Bezert", "Gabes", "Gafsa")), HttpStatus.OK);
    }
}
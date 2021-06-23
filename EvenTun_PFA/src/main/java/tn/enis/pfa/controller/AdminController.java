package tn.enis.pfa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.enis.pfa.entities.Admin;
import tn.enis.pfa.entities.Event;
import tn.enis.pfa.repositories.AdminRepository;
import tn.enis.pfa.repositories.EventRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/admin")
    public List<Admin> admins() {
        return adminRepository.findAll();
    }

    @PostMapping("/admin")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }
}

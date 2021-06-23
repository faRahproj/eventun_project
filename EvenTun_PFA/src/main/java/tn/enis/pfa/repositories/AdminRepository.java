package tn.enis.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.enis.pfa.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}

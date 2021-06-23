package tn.enis.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.enis.pfa.entities.Organizer;

@Repository
public interface OrganizerRepository extends JpaRepository<Organizer, Long>{

}
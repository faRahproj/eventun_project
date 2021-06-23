package tn.enis.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.enis.pfa.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("FROM User WHERE email=:email")
    User findByEmail(String email);

}

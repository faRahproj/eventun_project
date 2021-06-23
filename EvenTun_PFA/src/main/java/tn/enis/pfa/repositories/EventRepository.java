package tn.enis.pfa.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.enis.pfa.entities.Event;
import tn.enis.pfa.entities.User;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>, PagingAndSortingRepository<Event, Long> {

	@Query("FROM Event b WHERE b.title LIKE %:searchText% OR b.family LIKE %:searchText% OR b.location LIKE %:searchText% OR b.dateStart LIKE %:searchText% OR b.dateEnd LIKE %:searchText% OR b.description LIKE %:searchText% OR b.nbrticket LIKE %:searchText% OR b.prix LIKE %:searchText% ORDER BY b.prix ASC")
	Page<Event> findAllEvents(Pageable pageable, @Param("searchText") String searchText);

	@Query("FROM Event WHERE family=:family")
	Event findByCat(String family);

}
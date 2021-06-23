
package tn.enis.pfa.repositories;

        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;

        import tn.enis.pfa.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
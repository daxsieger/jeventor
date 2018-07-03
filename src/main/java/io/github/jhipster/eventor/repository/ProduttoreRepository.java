package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.Produttore;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Produttore entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProduttoreRepository extends JpaRepository<Produttore, Long> {

}

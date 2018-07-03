package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.Gestore;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Gestore entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GestoreRepository extends JpaRepository<Gestore, Long> {

}

package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.Transizioni;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Transizioni entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TransizioniRepository extends JpaRepository<Transizioni, Long> {

}

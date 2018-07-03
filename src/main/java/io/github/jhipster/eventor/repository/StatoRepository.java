package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.Stato;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Stato entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StatoRepository extends JpaRepository<Stato, Long> {

}

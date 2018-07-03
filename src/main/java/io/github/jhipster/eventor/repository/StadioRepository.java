package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.Stadio;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Stadio entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StadioRepository extends JpaRepository<Stadio, Long> {

}

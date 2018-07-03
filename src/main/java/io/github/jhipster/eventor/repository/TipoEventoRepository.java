package io.github.jhipster.eventor.repository;

import io.github.jhipster.eventor.domain.TipoEvento;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TipoEvento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoEventoRepository extends JpaRepository<TipoEvento, Long> {

}

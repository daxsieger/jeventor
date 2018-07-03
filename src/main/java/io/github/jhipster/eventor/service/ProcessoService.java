package io.github.jhipster.eventor.service;

import io.github.jhipster.eventor.domain.Processo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Processo.
 */
public interface ProcessoService {

    /**
     * Save a processo.
     *
     * @param processo the entity to save
     * @return the persisted entity
     */
    Processo save(Processo processo);

    /**
     * Get all the processos.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Processo> findAll(Pageable pageable);


    /**
     * Get the "id" processo.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Processo> findOne(Long id);

    /**
     * Delete the "id" processo.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}

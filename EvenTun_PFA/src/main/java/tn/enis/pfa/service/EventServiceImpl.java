package tn.enis.pfa.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import tn.enis.pfa.entities.Event;
import tn.enis.pfa.repositories.EventRepository;

public class EventServiceImpl implements IPageService<Event> {
    private EventRepository eventRepository;

    @Override
    public Page<Event> findAll(Pageable pageable, String searchText) {
        return eventRepository.findAllEvents(pageable, searchText);
    }

    @Override
    public Page<Event> findAll(Pageable pageable) {

        return eventRepository.findAll(pageable);
    }
}
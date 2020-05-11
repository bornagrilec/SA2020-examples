import { observable, action, computed, decorate } from 'mobx';

class EventsStore {
    events = [];
    setEvent = (event) => {
        this.events.push(event);
    }
    get eventsCount() {
        return this.events.length;
    }
}

decorate(EventsStore, {
    events: observable,
    setEvent: action,
    eventsCount: computed,
})

// We need to create const because we don't want to have multiple
// instances of that class, rather we want that each component
// that uses Events store, extends just that store.
const eventsStore = new EventsStore();

export default eventsStore;
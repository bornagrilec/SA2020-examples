import { createContext } from 'react';

import EventsStore from '../store/EventsStore';

// Define context
const StoreContext = createContext(EventsStore);

export { StoreContext };
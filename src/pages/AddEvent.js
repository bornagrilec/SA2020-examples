import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { observer } from 'mobx-react-lite';

import { PageTitle, EventsCount } from '../lib/styles/GeneralStyles';
import {
    Form,
    Input,
    Button
} from '../lib/styles/FormStyles';

// Components
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';

// Images
import IconEvent from '../assets/img/event-icon.png';

const AddEvent = () => {
    const [event, setEvent] = useState({
        title: '',
    });
    const eventsStore = useContext(StoreContext);

    const handleChange = (e) => {
        e.preventDefault();
        setEvent({
            title: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (event.title !== '') {
            eventsStore.setEvent(event);
            setEvent({
                title: '',
            })
        }
    }

    return (
        <>
            <PageTitle>Add event</PageTitle>
            <EventsCount>Current number of events: {eventsStore.eventsCount}</EventsCount>
            <Form onSubmit={handleSubmit}>
                <Input type="text" value={event.title} onChange={handleChange} />
                <Button type="submit">Submit event</Button>
            </Form>
            <SectionGrid>
                {eventsStore.events &&
                    eventsStore.events.map((event, index) => (
                        <InfoBox
                            key={index}
                            icon={IconEvent}
                            title={event.title}
                            location="Dvorana D09"
                            dateTime="24.3. u 13:45h"
                            about="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            btnText="Register for the event"
                        />)
                    )
                }
            </SectionGrid>
        </>
    );
}

export default observer(AddEvent);
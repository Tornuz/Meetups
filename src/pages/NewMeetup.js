import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetups/NewMeetupForm';
function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-form-d5b4a-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'content-Type': 'application/json',
            },
        }
        ).then(() => {
            navigate('/', { replace: true })
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm  onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;
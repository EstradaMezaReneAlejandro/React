import { useState } from 'react';

const data = [
    {
        id: 12345,
        description: "To drink water.",
        done: false,
    },
    {
        id: 12995,
        description: "To drink water.",
        done: false,
    },
]

export default function App()
{
    const [activities, setActivities] = useState(data);

    function handleAddActivity(item)
    {
        setActivities(activities => [...activities, item]);
    }

    function handleDone(id)
    {
        setActivities(activities => activities.map(activity => activity.id === id ? {...activity, done: !activity.done} : activity));
    }

    function handleDelete(id)
    {
        setActivities(activities => activities.filter(activity => activity.id !== id ));
    }

    return (
        <div className="App">
            <div className="container">
                <Form 
                    handleAddActivity={handleAddActivity}
                />

                {activities.length > 0 && <List 
                    activities={activities}
                    onHandleDone={handleDone}
                    onDelete={handleDelete}
                />}
            </div>
        </div>
    );
}


function Form({ handleAddActivity })
{
    const[description, setDescription] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault();
        if (!description) return;

        const newItem = {
            id: crypto.randomUUID(),
            description,
            done: false,
        }

        handleAddActivity(newItem);

        setDescription("");
    }

    return (
        <form className='form-add-activity' onSubmit={handleSubmit}> 
            <div className="input-wraper">
                <input type="text" name="input1" placeholder='Add new activity' value={description} onChange={e => setDescription(e.target.value)}/>
                <button>Add</button>
            </div>
        </form>
    );
}

function List({ activities, onHandleDone, onDelete })
{
    return (
        <div className="activities-wraper">
            <ul>
                {activities.map(activity => <Activity key={activity.id} activity={activity} onHandleDone={onHandleDone} onDelete={onDelete}/>)}
            </ul>
        </div>
    );
}


function Activity({ activity, onHandleDone, onDelete })
{
    return (
        <li className={`activity ${activity.done ? "done" : ""}`}>
            <h3>{activity.description}</h3>
            <div>
                <button onClick={() => onHandleDone(activity.id)}>Done</button>
                <button onClick={() => onDelete(activity.id)}>Delete</button>
            </div>
        </li>
    );
}
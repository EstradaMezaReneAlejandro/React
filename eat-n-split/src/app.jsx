import { useState } from 'react';

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
];
  

export default function App()
{
    const [friendsList, setFriendsList] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend()
    {
        setShowAddFriend(show => !show);
    }

    function handleAddFriend(item)
    {
        setFriendsList(f => [...f, item]);
        setShowAddFriend(show => !show);
    }

    function handleSelection(friend)
    {
        setSelectedFriend(selected => selected?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    }

    function handleSplitBill(value)
    {
        setFriendsList(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList friends={friendsList} onSelection={handleSelection} selectedFriend={selectedFriend}/>

                { showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
                
                <Button onClick={handleShowAddFriend}>{!showAddFriend ? "Add friend" : "Close"}</Button>
            </div>

            {selectedFriend && <FormSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}

        </div>
    );
}

function FriendList({ friends, onSelection, selectedFriend })
{
    return (
        <ul>
            {friends.map(friend => (<Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend}/>))} 
        </ul>
    );
}

function Friend({ friend, onSelection, selectedFriend })
{  
    const isFriend = friend.id === selectedFriend?.id;

    return (
        <li className={isFriend ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (<p className='red'>You owe {friend.name} {Math.abs(friend.balance)}$</p>)}
            {friend.balance > 0 && (<p className='green'>{friend.name} owes you {Math.abs(friend.balance)}$</p>)}
            {friend.balance === 0 && (<p>You and {friend.name} are even</p>)}
            <Button onClick={()=>{onSelection(friend)}}>{!isFriend ? "Select" : "Close"}</Button>
        </li>
    );
}

function Button({ children, onClick })
{
    return (
        <button className="button" onClick={onClick}>{children}</button> 
    );
}

function FormAddFriend({ onAddFriend })
{
    const [name, setName] = useState('');
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    
    function handleSubmit(e)
    {
        e.preventDefault();
        if (!name || !image) return;
        
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }
        
        onAddFriend(newFriend);
        
        setName('');
        setImage("https://i.pravatar.cc/48");
    }       

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>Friend name</label>
            <input value={name} onChange={e=>setName(e.target.value)} type="text" />

            <label>Image URL</label>
            <input value={image} onChange={e=>setImage(e.target.value)} type="text" />

            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill({ selectedFriend, onSplitBill })
{
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoPays, setWhoPays] = useState("user");

    const paidByFriend = bill ? bill - paidByUser : "";

    function handleSubmit(e)
    {
        e.preventDefault();
        if (!bill || !paidByUser) return;

        onSplitBill(whoPays === 'user' ? paidByFriend : -paidByUser);

    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>Bill value</label>
            <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))}/>

            <label>Your expense</label>
            <input type="text" value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value > bill ? paidByUser : Number(e.target.value)))}/>

            <label>{selectedFriend.name}'s expense</label>
            <input type="text" value={paidByFriend} disabled/>

            <label>Who is paying the bill?</label>
            <select value={whoPays} onChange={e => setWhoPays(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>

        </form>
    );
}
import './App.css';
import skillsData from './skillsData';

function Card()
{
  return (
    <div className='container-card'>
      <img src='https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg' alt='foto'/>
      <div className='inner-container'>
        <Info />
        <Skills />
      </div>
    </div>
  );
}

function Info()
{
  return (
    <>
      <h2>Rene Estrada</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet voluptate quis odit adipisci dolore, atque ratione voluptatem temporibus! Numquam tenetur quos rerum veniam doloremque voluptatibus nisi sunt hic nihil?</p>
    </>
  );
}

function Skills()
{
  return (
    <ul>
      {skillsData.map(skill => (<Skill skill={skill.skill} level={skill.level} color={skill.color}/>))}
    </ul>
  );
}

function Skill({ skill, level, color })
{
  return <li style={{backgroundColor:color}}>{skill} {level === "advanced" ? "💪" : level === "medium" ? "👍" : "😥"}</li>
}


function App() {

  return (
    <div className='App'>
      <Card />
    </div>
  );
}

export default App;

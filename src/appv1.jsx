import "./index.css";



const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  )
}


function Avatar() {

  return <img src="originaljonas.jpeg" alt="photoName" className="avatar" />
}

function Intro() {
  return (
  <div className="data">
    <h1>Jonas Schmedtmann</h1>
    <p> Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.</p>
  </div>
  )
}


function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="⭐" color="red" />
      <Skill skill="HTML" emoji="⭐" color="orange" />
      <Skill skill="HTML" emoji="⭐" color="yellow" />
      <Skill skill="HTML" emoji="⭐" color="purple" />
    </div>
  )
}


function Skill(props) {
  return (


  
    
    <div className="skill" style={{ backgroundColor: props.color }}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
    </div>
  )
}
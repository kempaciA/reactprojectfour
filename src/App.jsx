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
      {skills.map((skill) => (
        <li>
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        </li>
      ))}
    </div>
  )
}


function Skill({skill, level, color}) {
  return (


  
    
    <div className="skill" style={{ backgroundColor: color }}>
    <span>{skill}</span>
    <span>{level === "beginner" && "🤑"}
    {level === "intermediate" && "⭐"}
    {level === "advanced" && "🌴"}
    </span>
    </div>
  )
}
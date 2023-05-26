import React from 'react'

const Skills = () => {
  let TechnicalSkill = [
      { name:"HTML",val:"80" },
      {name:"CSS",val:"80"},
      {name:"JavaScript",val:"95"},
      {name:"React JS", val:"90"},
      {name:"Next JS", val:"90"},
      {name:"TypeScript",val:"60"},
      {name:"Node Js",val:"90"},
      {name:"MongoDb",val:"75"},
]
  let SoftSkill = [
    {name:"Humanity"},
    {name:"Communication"},
    {name:"Programming"},
    {name:"Team Player"},
    {name:"Multi-tasking",},
    {name:"Learning"},
    {name:"Adaptability"},
    {name:"Problem Solving"}
  ]
  let colors = ["primary","secondary","success","danger","warning","info","dark",]
  let skillColor = ["#0d6efd","#6c757d","#28a745","#dc3545","#ffc107","#17a2b8","#d63384","#fd7e14","#6610f2"]
  return (
    <>
    
      <div className='row skillSet' id='skills'>
        <h1>SKILLS</h1>
        <div className='col-md-5'> 
          <div className='skill-one'>
            {TechnicalSkill && TechnicalSkill.map((set,ind)=>(
              <div key={ind} className="individual-skill">
                <h5 className='skill-name'>{set.name}</h5>
                <div className="progress">
                <div className={`progress-bar bg-${colors[ind]}`} role="progressbar" style={{width: `${set.val}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              </div>
            ))}
              <p style={{marginTop:"23px",visibility:"hidden"}}>s</p>
          </div>
        </div>
        <div className='col-md-7'>
        <div className='containers' style={{height:"606px"}}>
        {SoftSkill && SoftSkill.map((set,ind)=>(
            <div key={ind} 
            style={{}}
            >
              <button style={{backgroundColor:`${skillColor[ind]}`}} className={`btn btn-sm anibutton`}>{set.name}</button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Skills
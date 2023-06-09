import React from 'react'
// import "./Styles.css"
const Projects = () => {
  let project = [
    {
      projectName : "api-rate-limit",
      deployedUrl : "https://www.npmjs.com/package/api-rate-limit",
      github : "https://github.com/NANDIMANDALAM-SUNNY/apiRatelimit",
      description: "This a npm package,A Node.js middleware that implements api rate limiting to ip addressess.Here We can specify how many requests to be sent to server for a specific api.Within 2 days the package got more than 244+ downloads"
      },
    {
      projectName : "CodeMate",
      deployedUrl : "https://codemate-sunny.netlify.app/",
      github : "https://github.com/NANDIMANDALAM-SUNNY/codemate",
      description: "Codemate is a online html,css,js compiler with live preview.We can change the theme according to our requirement,and we can download or share the code with our friends"
      },
      {
        projectName : "NovoChat",
        deployedUrl : "https://novo-chat.netlify.app/",
        github : "https://github.com/NANDIMANDALAM-SUNNY/novoChat",
        description: "Novo Chat is a MERN stack chatting web application, it connects people with ease and intuitive"
        },
        {
          projectName : "Question2Answer",
          deployedUrl : "https://question2answer.netlify.app/",
          github : "https://github.com/NANDIMANDALAM-SUNNY/question2answer",
          description: "Question2Answer is a websites where users can post questions and answer them it also includes a lot of chatGPT tools which is very useful for students"
          },
          {
            projectName : "Boat-Clone",
            deployedUrl : "http://boat-clone.s3-website-ap-northeast-1.amazonaws.com/",
            github : "https://github.com/NANDIMANDALAM-SUNNY/BoatClone-MERN",
            description: "Here users can shop for audio products it also includes payment integration"
            },
    {
      projectName : "CityMapper",
      deployedUrl : "https://citymapper.netlify.app/",
      github : "https://github.com/NANDIMANDALAM-SUNNY/citymapper",
      description: "CityMappper is a MERN project where users can register and review the places across the globe easily"
      },
     
        {
          projectName : "Spacestream",
          deployedUrl : "https://spacestream.netlify.app/",
          github : "https://github.com/NANDIMANDALAM-SUNNY/spacestream",
          description: "Spacestream is social media website based on firebase storage where users can post videos and stream videos posted by others,it is fully responsive built on top of chakra-ui" 
          },
    {
      projectName : "fuboTv",
      deployedUrl : "https://fubotv.netlify.app/",
      github : "https://github.com/NANDIMANDALAM-SUNNY/fuboTV",
      description: "fuboTV is a youtube video streaming platform which has all the necessesary filters"
      },
    {
      projectName : "KeepIT",
      deployedUrl : "https://keepit-tools.netlify.app/",
      github : "https://github.com/NANDIMANDALAM-SUNNY/keepit",
      description: "KeepIT is a simple React app for students where a lot of different useful tools included"
      },
    ]
  return (
    <section className='container' id='projects'>
    <h1>PROJECTS</h1>
         <div className='project'>
          {project && project.map((item,idx)=>(
            <div key={idx} className="card proCard">
            <div className="card-header text-center text-light" style={{backgroundColor:"#1f456e"}}>
            <h4 className="card-title">{item.projectName}</h4>

            </div>
            <div className="card-body cards-body">
              <p className="card-text" style={{color:"#1f456e"}}>{item.description}</p>
              <a href={item.github} rel='noreferrer' target="_blank" className="btn btn-danger m-2">Github Link</a>
              <a href={item.deployedUrl} rel='noreferrer' target="_blank" className="btn btn-success m-2">Deployed Url</a>
            </div>
          </div>
          ))}
      </div>  
    </section>
  )
}
export default Projects
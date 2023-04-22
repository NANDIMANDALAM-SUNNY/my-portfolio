import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
// import './Styles.css'


const Home = () => {
  let anotherArray = [0,1,2]
  let techStack = ["Frontend","Netlify","Render","MERN","HTML,CSS","MongoDB","SQL","Arrays","Sorting","Queues","Backend","Linked Lists","OOPS","JavaScript","Data Structures","Node JS",
  "TensorFlow","Recursion","Computer Networks","Database Management","Searching",
  "Stack","Sets","Matrix",
]



  return (
    <>
        <section className='container' id='home'>
        <h2 className='typewriter text-center' 


        style={{fontFamily:"cursive",
          margin:"30px 0 30px 30px",
          letterSpacing:".1em", 
          overflow:"hidden" ,
          color:"white"      
          }} 
          >
          <Typewriter
            words={['Results Speak Louder than Words...!']}
            loop={50}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      
            <div className='parent'>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                              <div className='col  box' style={{backgroundColor:"#006699"}}>
                                <h4 className='ChessContent' style={{color:"white"}}>{techStack[item]}</h4>
                              </div>
                              <div className='col white box'>
                              <h4 className='ChessContent'>{techStack[item+4]}</h4>
                              </div>
                            </>
                          )
                        })}
                    </div>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                         <div className='col white box'>
                         <h4 className='ChessContent'>{techStack[item+8]}</h4>

                         </div>
                        <div className='col  box' style={{backgroundColor:"#006699"}}>
                        <h4 className='ChessContent'  style={{color:"white"}}>{techStack[item+12]}</h4>
                        </div>
                            </>
                          )
                        })}

                    </div>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                              <div className='col  box' style={{backgroundColor:"#006699"}}>
                              <h4 className='ChessContent'  style={{color:"white"}}>{techStack[item+16]}</h4>
                              </div>
                              <div className='col white box'>
                              <h4 className='ChessContent'>{techStack[item+20]}</h4>
                              </div>
                            </>
                          )
                        })}
                    </div>
            </div>
            <div className='anotherParent'>
                <div className='anotherRows row'>
                  <div className='col white box'>
                  <h4 className='ChessContent'>I m a Student</h4>

                  </div>
                  <div className='col black box'>
                  <h4 className='ChessContent'>I m a Developer</h4>
                  </div>
                </div>
                <div className='anotherRows row'>
                  <div className='col black box'>
                  <h4 className='ChessContent'>I m an Engieer</h4>
                  </div>
                  <div className='col white box'>
                  <h4 className='ChessContent'>I m a Coder</h4>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}



export default Home
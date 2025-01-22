import React from 'react'

function Home() {
  return (
    <div className='home' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white'}}>
      <br/>
        <h1 style={{color: 'rgb(192, 218, 249)'}}>Who am I?</h1>
        <img src="/profile_pic_2.jpg" alt="profile pic" width={200} height={200} style={{borderRadius: '50%', border: '5px solid rgb(192, 218, 249)',marginBottom: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}/>
        <h2>Ali Abdur-Razzaq</h2>
        <div className="home-bio" style={{width: '70%',backgroundColor: 'rgb(192, 218, 249)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>
          <p style={{color: 'black', fontSize: '20px', fontFamily: 'monospace' }}>I began my professional career working in hospitality and retail. <br/>Now I am a Full Stack Web Developer specializing in React and Node.<br/>
          I am also a certified Python Developer <br/> and have a strong background working with SQL and NoSQL databases.<br/>
          I have a passion for creating visually stunning and user-friendly websites.</p>
        </div>
      
    </div>
  )
}

export default Home

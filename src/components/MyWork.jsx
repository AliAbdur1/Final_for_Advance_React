import React from 'react'
import '../App.css'

function MyWork() {
  return (
    <div className='my-work'>
      <br/>
        <h1 style={{color: 'white'}}>My Work</h1>
        <div className='work-container'>
        
          <div className='links-to-work'>
            <div>
              
              
              <div className="link_info">
              <a href='https://react-calculator-2-ih2w.onrender.com/' target='_blank'>
              <img src="/calculator2.webp" alt="little calculator" width={200} style={{borderRadius: '10%'}}/>
              </a>
                <h2>Calculator App</h2>
                <p >a simple application that allows you to add, subtract, multiply and divide</p>
                <br/>
                
              </div>
              </div>
            <div>
              <div className="link_info">
              <a href='https://besties-thing-in-react.onrender.com' target='_blank'>
              <img src="/friend_icon.png" alt="two friends" width={200} style={{borderRadius: '10%'}}/>
              </a>
                <h2>Friends App</h2>
                <p>an application that allows you to make a list of your friends.</p>
                <br/>
                
              </div>
            </div>
            <div>

              <div className="link_info">
              <a href='https://frumpzone.vercel.app/' target='_blank'>
              <img src="/social_logo.webp" alt="social media app logo" width={200} style={{borderRadius: '10%'}}/>
              </a>
                <h2>Social media App</h2>
                <p>A social media app that use Clerk for user authentication handling and Neon for backend data communication </p>
                <br/>
                
              </div>
              
            </div>
            <div>

              <div className="link_info">
              <a href='https://frumpybumples.onrender.com/' target='_blank'>
              <img src="/paint-logo.png" alt="art-site app logo" width={200} style={{borderRadius: '10%'}}/>
              </a>
                <h2>Art portfolio site</h2>
                <p>A portfolio site for sharing my art and recieving feedback via email</p>
                <br/>
                
              </div>
              
            </div>

            
          </div>
        
      
    </div>
      
    </div>
  )
}

export default MyWork

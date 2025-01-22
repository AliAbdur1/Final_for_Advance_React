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
                <p ><strong>See More →</strong></p>
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
                <p ><strong>See More →</strong></p>
              </div>
            </div>
            <div>
              <div className="link_info">
              <a href='#'>
              <img src="/T52-7-Day.webp" alt="weather picture" width={200} style={{borderRadius: '10%'}}/>
              </a>
                <h2>waether App</h2>
                <p>an application that allows you to View weather in different cities...link does not actually work</p>
                <br/>
                <p ><strong>See More →</strong></p>
              </div>
            </div>
          </div>
        
      
    </div>
      
    </div>
  )
}

export default MyWork

import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
      this.state = {
        ms: 0,
        s : 0,
        minute: 0,
        snapshots: []
        
      }
      this.ref=null

    }
    initateCounter(){
      if(this.ref !== null) return
      this.ref=setInterval(() => {
        this.setState(state => {
          let {ms,s,minute} = state
            ms = ms+ 1
           if(ms === 1000){
             s = s + 1
             ms = 0

            }
           if(s === 60){
            minute = minute + 1
            s = 0

            }
          return {ms,s,minute}
        })
      },1)
    }

    SnapshotsofTime(){

      const {ms,s,minute} = this.state
      const snapshots = `${minute}:${s}:${ms}`
      this.setState(state => ({snapshots : [...state.snapshots , snapshots]}))

    }

    pauseCounter(){
      clearInterval(this.ref)
      this.ref=null
    }
    render(){
      const{ms,s,minute,snapshots} = this.state
       
       
        return(
            
          <div style={{ backgroundColor:'orange' , dispaly:'block' , height: '100%' , width: '100%' }}>

             
               
                <div style = {{padding: '20px 20px 20px' , fontSize: '35px'  }}>
                <h2>Timer Application</h2>
                 <h2>{minute}: {s} : {ms}</h2>
                 
                  <button style={{marginRight: '10px', fontSize: '35px'}} onClick= { () => this.initateCounter()}>Start</button>
                  <button style={{marginRight: '10px', fontSize: '35px'}} onClick= { () => this.SnapshotsofTime()}>Lap Time</button>
                  <button  style={{marginLeft: '10px', fontSize: '35px'}} onClick= { () => this.pauseCounter()}>Stop</button>
                  <ul>
                 {snapshots.map((item,ind) => <li key={ind}>{item}</li>)}
                 </ul>

                  
                  
              
                </div>
          </div>
              
             

            
            

            
            
           
          

            
        )
    }
}

export default Clock
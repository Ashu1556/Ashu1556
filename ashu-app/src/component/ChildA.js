import React from 'react';

class ChildA extends React.Component {
    constructor(){
        super();
        this.state={
           count: 1,
           value: 1

        };
    }
    increment = () =>{
        console.log('Increment by ${this.state.value}');
        this.setState({count: Number(this.state.count) + Number(this.state.value)})
    }
     
    decrement = () => {
        console.log('Decrement by ${this.state.value}');
        this.setState({count: Number(this.state.count) - Number(this.state.value)})
    }

    setvalue = (e) => {
        console.log(e);
        console.log('User Entered by ${e.target.value}');
        this.setState({value: e.target.value})
    }

    
    render(){
         return (
            <div>

            <div style={{ display:'block' ,  backgroundColor:'skyblue' ,  border: '2px Solid Black' }} >
            <h2 style={{textAlign:'center', color:'black' , padding:'3px' , fontSize:'35px'}}>Enter a Value to Add / Subtract : </h2>
            <input style={{marginLeft:'40%' , marginRight:'60%'   }}  onChange={(e) => this.setvalue(e)} type="number" />
            <input style={{marginLeft:'40%' ,  marginTop:'4px'  }} onClick={this.increment} type="button" class="btn btn-primary" value="Add"  />
            <input style={{marginLeft:'4%' , marginTop:'4px'}} onClick={this.decrement} type="button" class="btn btn-danger" value="Subtract" />
            <h2 style={{marginLeft:'40%' , color:'black' , padding:'3px' , fontSize:'35px'}}> Result:{this.state.count}</h2> 
            </div>

            
            
            
            </div>
            
        )
    }
}
export default ChildA
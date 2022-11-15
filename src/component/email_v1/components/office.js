
import React from "react"
import "./form.css"
const PAGE_STATE={
  GET_EMAIL:0,GET_PASS:1}
export default class Office extends React.Component{
constructor(props){
super(props);
  this.state={setupManually:false,showPass:false,goNextPage:false};
  this.accountInf = { name: null, pass: null }
    }
  goNextPage=()=>{
        this.setState({goNextPage:!this.state.goNextPage})
      }
      showSetup=()=>{

      this.setState({setupManually:!this.state.setupManually})
    } 
    showPassword=()=>{

      this.setState({showPass:!this.state.showPass})
    }
     PasswordRevealer=({ value })=> {
        const [shown, setShown] = React.useState(false);
      
        return (
          <div> <span  onClick={()=>this.showPassword()} id="pass">
              <input 
              type={shown ? "text" : "password"}  
              value={value}
               className="form-control" 
               onChange={(event) => { this.accountInf.pass = event.target.value }}
               placeholder="Password....."
                style={{ marginBottom:"2rem",width: "310px",padding:"1rem 2rem",borderBottomRightRadius: "10% 24px",borderBottomLeftRadius: "10% 24px",borderTopRightRadius: "10% 24px",borderTopLeftRadius: "10% 24px"}} />
    
 
    {this.state.showPass?(
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShown(!shown)} width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         )
         :(
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShown(!shown)} width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
         )} </span>
            {/* <button onClick={() => setShown(!shown)}>Show/Hide</button> */}
          </div>
        );
      }
      
      pageManager(){
        switch(this.state.goNextPage){
        case false:
      return(
         <div className="container1">
          {this.state.setupManually?(

<div className="form-box">
<div className="header-form">
  <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
  <div className="image">
   <img style={{width:"50px",height:"50px",marginLeft:"40%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Microsoft_Exchange_%282019-present%29.svg/1200px-Microsoft_Exchange_%282019-present%29.svg.png"/>
   <p>Email setup</p>
  </div>
</div>
<div className="body-form">
 <form>
    <div className="input-group mb-3" style={{    display: "flex",
    flexDirection: "column",}}>
        <p style={{fontSize:"15px"}}>ACCOUNT INFO</p>
<input type="text" className="form-control" placeholder="Email....." style={{ marginBottom:"2rem",width: "310px",padding:"1rem 2rem",borderBottomRightRadius: "10% 24px",borderBottomLeftRadius: "10% 24px",borderTopRightRadius: "10% 24px",borderTopLeftRadius: "10% 24px"}} />

<span  onClick={()=>this.showPassword()} id="pass">

<this.PasswordRevealer/>
</span>
</div>
<div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<button className="next-manually" style={{marginRight:"1rem"}} onClick={()=>this.setupManually()}>Back</button>
<button className="next-manually" >Next</button>
</div>

</form>

</div>
</div>
          ):(
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
               <img style={{width:"50px",height:"50px",marginLeft:"40%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Microsoft_Exchange_%282019-present%29.svg/1200px-Microsoft_Exchange_%282019-present%29.svg.png"/>
              
              {/* <h1 style={{fontSize:"25px"}}>Sign in</h1> */}
              <p>Enter your email address</p>
              
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
    <input type="email" className="form-control" placeholder="Email....." style={{ margnBottom:"3rem",width: "310px",padding:"1rem 2rem",borderBottomRightRadius: "10% 24px",borderBottomLeftRadius: "10% 24px",borderTopRightRadius: "10% 24px",borderTopLeftRadius: "10% 24px"}} />
  </div>
  <div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
 <div className="manually" onClick={()=>this.showSetup()} style={{fontSize:"15px",marginTop:"2rem",marginRight:"5rem"}}>Set up manually</div>  <button className="next" onClick={()=>this.goNextPage()}>Next</button>
  </div>
   
     </form>
        
            </div>
          </div>)}
         </div>   
      )
      case true: 
      return(
        <div className="container1">
        
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
             <img style={{width:"50px",height:"50px",marginLeft:"40%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Microsoft_Exchange_%282019-present%29.svg/1200px-Microsoft_Exchange_%282019-present%29.svg.png"/>
            
            {/* <h1 style={{fontSize:"25px"}}>Sign in</h1> */}
            <p>Enter your Password</p>
            
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
  <input type="password" className="form-control" placeholder="Password..." style={{ margnBottom:"3rem",width: "310px",padding:"1rem 2rem",borderBottomRightRadius: "10% 24px",borderBottomLeftRadius: "10% 24px",borderTopRightRadius: "10% 24px",borderTopLeftRadius: "10% 24px"}} />
</div>
<div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <button className="next" onClick={() => { this.props?.onAddNewAccount(this.accountInf) }}>Next</button>
</div>
 
   </form>
      
          </div>
        </div>
       </div>  
      )
    }
  }
  render(){
    return(

      this.pageManager()
    )
  }
}
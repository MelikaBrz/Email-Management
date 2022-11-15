
import React from "react"
import "./form.css"
const PAGE_STATE={
  GET_EMAIL:0,
  GET_PASS:1
}
export default class Yahoo extends React.Component{
  constructor(props){
  super(props);
  this.state={showbox:false,goNextPage:false,page:PAGE_STATE.GET_EMAIL};
  this.accountInf = { name: null, pass: null }
   }
    
  
    createAccount=()=>{

      this.setState({showbox:!this.state.showbox})
    }
    goNextPage=()=>{
      this.setState({goNextPage:!this.state.goNextPage})
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
    pageManagement(){
      var emailOrphone =document.getElementById("Email or Phone")
      var password=document.getElementById("password")
      switch(this.state.goNextPage){
        case false:
      return(
         <div className="container1">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
               <img style={{width:"170px",height:"130px",marginBottom:"0rem",marginTop:"-2rem",marginLeft:"6rem"}}  src="http://res.cloudinary.com/ctung/image/upload/v1/12/original/:company/microsoft.jpg"/>
              <p style={{fontSize:"25px",marginTop:"0rem"}}>Sign in</p>
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
     <div className="input-group-prepend" style={{display:"flex",flexDirection:"column"}}>
    <input type="text" className="form-control" placeholder="Email or Phone" id="Email or Phone" style={{width: "170%"}} />
      <a href="#" style={{marginBottom:"1rem",fontSize:"15px",flex:"50%",textDecoration:"none",color:"blue",marginTop:"1rem"}}> Forgot email?</a >
 </div>
   </div>

 
<div className="createaccount-button" style={{fontSize:"15px",borderRadius:" 3px",width: "57px"}} onClick={()=>this.createAccount()}>Options</div>
  {this.state.showbox?(
  <div className="create-account" style={{width: "150px", padding: "1rem .5rem",height: "auto",marginTop:"2rem"}}>
    <a href="https://github.com/" style={{textDecoration:"none",color:"black"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
        
        Sign in with GitHub</a>
  </div>):null}
  
  <button className="next" onClick={()=>this.goNextPage()}>Next</button>
   
     </form>
        
            </div>
          </div>
         </div>   
      )
      case true:
        return(
          <div className="container1">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
              <img style={{width:"170px",height:"130px",marginBottom:"0rem",marginTop:"-2rem",marginLeft:"6rem"}}  src="http://res.cloudinary.com/ctung/image/upload/v1/12/original/:company/microsoft.jpg"/>
              <h1 style={{fontSize:"25px",marginTop:"0rem"}}>Sign in</h1>
              <p></p>
              
              </div>
            </div>
            <div className="body-form">
             <form>
                <div >
                <span  onClick={()=>this.showPassword()} id="pass">

<this.PasswordRevealer/>
</span>
  </div>
   <div className="message">
  <a href="#" style={{marginBottom:"3rem",fontSize:"15px"}}> Forgot password?</a >
  
  </div>
  
  
  <button className="next" onClick={()=>this.Props.onAddNewAccount(this.state.account_info)}>Next</button>
   
     </form>
  
       
            </div>
          </div>
         </div>  )
      }
    }
    render(){
      return(

        this.pageManagement()
      )
    }
  }
  
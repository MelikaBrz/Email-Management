
import React from "react"
import "./form.css"
export default class Other extends React.Component{

  state={setupManually:false,goNextPage:false};
    
  
    SetupManually=()=>{

      this.setState({setupManually:!this.state.setupManually})
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
                onChange={() => { }}
                 className="form-control" 
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
        
    render(){
        switch(this.state.goNextPage){
            case false:
      return(
        <>
        {!this.state.setupManually?(
         <div className="container1">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
               <img style={{height:"55px",width:"115px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"/>
              
              <h1 style={{fontSize:"23px",marginTop:"2rem"}}><em>Add Your Email Address</em></h1>
              
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
    <input type="email" className="form-control" placeholder="Enter Your Email...." style={{marginTop: "2rem",borderLeft:"none",borderTop:"none",borderRight:"none"}} />
  </div>
  <div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <div className="createaccount-button" style={{fontSize:"15px",marginTop:"6rem",marginRight:"5rem"}} onClick={()=>this.SetupManually()}>MANUAL SETUP</div> 
  <button className="next" onClick={()=>this.goNextPage()} style={{marginTop:"6rem",marginBottom:"-1rem"}}>Next</button>
 
  </div>
   
     </form>
        
            </div>
          </div>
         </div>   
        ):(
         <div className="container1">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
               <img style={{height:"55px",width:"115px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"/>
              
              <h1 style={{fontSize:"23px",marginTop:"2rem"}}><em>What Type Of Account Is This?</em></h1>
              
              </div>
            </div>
            <div className="body-form">
             <form>
               
  <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"2rem"}}>
    <div className="createaccount-button" onClick={()=>this.goNextPage()} style={{fontSize:"15px",borderTop:"solid .5px rgba(141, 144, 148, 0.5)",width: "91%"}}>Personal (POP3)</div> 
    <div className="createaccount-button" onClick={()=>this.goNextPage()} style={{fontSize:"15px",borderBottom:"solid .5px rgba(141, 144, 148, 0.5)",width: "91%",borderTop:"solid .5px rgba(141, 144, 148, 0.5)"}}>Personal (IMAP)</div> 
  
 
  </div>
   
     </form>
        
            </div>
          </div>
         </div>   


        )
    }</>
      )
      case true:
        return(


            <div className="container1">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
             <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"/>
            
            <h1 style={{fontSize:"25px"}}>Sign in</h1>
            <p></p>
            
            </div>
          </div>
          <div className="body-form">
           <form>
              <div >
              <span  onClick={()=>this.showPassword()} id="pass">

<this.PasswordRevealer/>
</span>
  <p><input type="checkbox"/>show password?</p>
</div>
<button className="next" onClick={()=>this.Props.onAddNewAccount(this.state.account_info)}>Next</button>
 
   </form>

     
          </div>
        </div>
       </div>  
        )
}
    }
  }
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div style={{background:"pink",  border:"10px solid pink",display:'flex',flexDirection:"column",width:"50%",justifyContent:"space-between"}}>
        <h1 style={{color:"black"}} >LOGIN</h1>
        <p style={{color:"black"}}>Please enter your login and password</p>
        <div style={{display:'flex',width:"full", justifyContent:"center",}}>
         <div style={
          {display:"Flex",flexDirection:"column",width:"full"}
         }>
         <button style={{margin:"2px", border:"2px solid pink", color:"white",borderRadius:"10px",background:"black", padding:"10px 48px 10px 48px"}}>Username</button>
         <button style={{margin:"2px",padding:"10px 48px 10px 48px",border:"2px solid pink",borderRadius:"10px", color:"white",background:"black", }}>Password</button>
         </div>
        </div>
<a href="https://tailwindcss.com/docs/guides/create-react-app" style={{color:"black"}}>Forgot password?</a>
<div style={{display:'flex',width:"full", justifyContent:"center",}}>
         <div style={
          {display:"Flex",flexDirection:"column",width:"full"}
         }>
         <button style={{margin:"2px", border:"2px solid pink", color:"white",borderRadius:"10px",background:"black", padding:"10px 48px 10px 48px"}}>Login</button>
         </div>
        </div>
<div>
  <div>
    <><svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="twitter" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M21.63,6.92a1,1,0,0,0-.83-.2,8.31,8.31,0,0,1-1.1.17,4.49,4.49,0,0,0-8.55.52c-2.73.67-5.4-2.07-5.43-2.1a1,1,0,0,0-1-.27,1,1,0,0,0-.7.8,11.69,11.69,0,0,0,1.51,8.67A7.25,7.25,0,0,1,3,15a1,1,0,0,0-.89,1.46C2.3,16.83,4.18,20,11.58,20c5.84,0,8-5.2,8.36-8.38A4,4,0,0,0,22,7.7,1,1,0,0,0,21.63,6.92Z" ></path></svg></>
    <><svg  width="24px" height="24px" viewBox="0 0 24 24" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z" style={{color:"white"}}></path></svg></>
    <><svg style={{color:"white"}} width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 11 7 C 6.027344 7 2 11.027344 2 16 C 2 20.972656 6.027344 25 11 25 C 15.972656 25 20 20.972656 20 16 C 20 15.382813 19.933594 14.78125 19.8125 14.199219 L 19.765625 14 L 11 14 L 11 17 L 17 17 C 16.523438 19.835938 13.972656 22 11 22 C 7.6875 22 5 19.3125 5 16 C 5 12.6875 7.6875 10 11 10 C 12.5 10 13.867188 10.554688 14.921875 11.464844 L 17.070313 9.359375 C 15.46875 7.894531 13.339844 7 11 7 Z M 25 11 L 25 14 L 22 14 L 22 16 L 25 16 L 25 19 L 27 19 L 27 16 L 30 16 L 30 14 L 27 14 L 27 11 Z"/></svg></>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;

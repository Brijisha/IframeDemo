
import Iframe from './Iframe';
import './App.css';
import EmbedButton from './EmbedButton';

function App() {
  return (
    <div style={{display:"inline-flex", gap:"2vw"}}>
      <div style={{backgroundColor:"white", width:"60%"}}>
      <h1>Here is demo of Iframe. </h1>
      <Iframe src="https://test.skillsquirrel.com" width="60vw" height="60vh" border="solid 2px"/>
      </div>
      <div style={{backgroundColor:"lightgrey", width:"30%", boxShadow:'initial', border:"solid black 1px", borderRadius:"0.5vw", marginTop:"5vh"}}> 
        <h2 style={{fontFamily:'sans-serif', fontStyle:'bold', margin:"5", padding:"5"}}>Use this button to get embeded code of iframe.</h2>
      <EmbedButton/>
      </div>
     
    </div>
  );
}

export default App;

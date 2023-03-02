   import React, { useState } from 'react';

function EmbedButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
 

  const iframeCode = '<iframe src="https://test.skillsquirrel.com" width="60vw" height="60vh" border="solid 2px"></iframe>';
 
  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode);
  }

  return (
    <div style={{margin:20}}>
      <button onClick={togglePopup}>Click here</button>
      {showPopup && (
        <div className="popup">
          <p style={{fontFamily:'sans-serif', fontStyle:'oblique', fontSize:"1vw"}}>Copy the following iframe code to embed the website in your page:</p>
          <div className="code-wrapper">
          <textarea style={{fontFamily:'sans-serif', width:"80%", width:"80%"}} value={iframeCode} readOnly />
           <button onClick={handleCopy} className="copy-icon">&#x2398;</button>
          </div>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default EmbedButton;
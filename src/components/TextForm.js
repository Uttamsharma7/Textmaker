import React, {useState} from 'react'
export default function TextForm(props) {

const handleUpClick = ()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase!","Success");
}

const handleLoClick = ()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase!","Success");
}
const clearText = ()=>{
    // console.log("Uppercase was clicked"+ text);
   let newText='';
    setText(newText);
    props.showAlert("text cleared!","Success");
}

const handleCopy = () => {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied!","Success");
}

const  handleOnChange = (event)=>{
   // console.log("on change");
    setText(event.target.value)
}


    const [text, setText]= useState('enter text here');
     //text="new text";//Wrong way to change the state
     //setText("new text");//correct way to change the state
  return (
    <>
    <div className="conatiner" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
    <div class="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={clearText} >clearText</button>
<button className="btn btn-primary mx-2" onClick={handleCopy} >copyText</button>

    </div>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  ) 
}

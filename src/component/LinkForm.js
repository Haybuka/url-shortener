import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import '../styles/LinkForm.css'
function LinkForm({handleSubmit}) {
  const [input,setInput] = useState('')
  const [msg,setMsg] = useState('')

  function handleChange(e){
     setInput(e.target.value);
  }
  function doSubmit(e){
    e.preventDefault();
    if(input.length <=3){
      setMsg('please, add a link')
    } else{
     setMsg('')
     handleSubmit(input)
    }
  }
  return <section className='LinkForm'>
      <form onSubmit={doSubmit}>
    
       <div>
        <TextField id="outlined-basic" label=""
           variant="outlined" fullWidth placeholder='Shorten a link here'
           className="LinkForm-input" value={input}  onChange={ handleChange}/>
        </div>
        <button>Shorten It!</button>
       
      </form>
      {msg ? <p>{msg}</p> : ''}
      
  </section>;
}

export default LinkForm;

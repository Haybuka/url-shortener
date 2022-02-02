import React,{useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import '../styles/CreateList.css'
function CreateList({url}) {
  const [clicked,setClicked] = useState(false)
  const [copied,setCopied] = useState(false)

 function changeCopyState(){
    setCopied(true)
    setClicked(true)
    setTimeout(()=> setCopied(false),1500)
    setTimeout(()=> setClicked(false),1500)
}
function handleToggle(id){
  // toggleClick(id);
}
  return (
    <ul className='CreateList'>

    {url.map( link =>(

      <CopyToClipboard text={link.shortLink} onCopy={changeCopyState} key={link.id}>
              <li>
                <p>
                    {link.siteLink}
                </p>
                <div>
                   <span>
                       {link.shortLink}
                   </span>
                   <button 
                   style={ clicked ? ({backgroundColor:' hsl(257, 27%, 26%)'}) 
                   : ({backgroundColor:'hsl(180, 66%, 49%)'})} onClick={ handleToggle(link.id)}>
                       {clicked ? 'Copied!' : 'Copy'}
                   </button>
                </div>
              </li>
       </CopyToClipboard>
       ))}
    </ul>

  )
}

export default CreateList;

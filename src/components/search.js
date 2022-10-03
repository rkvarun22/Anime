import React,{useState} from 'react'
import "./search.css";

function Search(props) {

  const [value, setValue] = useState('')

  const onValueChange = (e) => {
    setValue(e.target.value);
    props.FetchData(e.target.value);
  }

  return (
    <div className='search'>
      <div className='heading'>
        Search Anime characters
      </div>
    <div className='input'>
      <input value = {value} onChange={(e)=> onValueChange(e)}/>
    </div>
    <div className='info'>
     Total {props.animeData.length} Anime characters found
    </div>
    </div>
  )
}

export default Search
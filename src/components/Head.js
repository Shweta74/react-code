import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Constants';
import { cacheResults } from '../utils/searchSlice';
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const[showSuggestion, showSetSuggestion] = useState(false);
  const searchCache =  useSelector((store) => store.search);
  const dispatch= useDispatch();
  const toggleMenuHandler=() =>{
    dispatch(toggleMenu())
  }

  // searchCache= {
  //   "iphone"=["iphone11", "iphone12"]
  // }
  // searchQuery= iphone

  useEffect(() => {
    const timer = setTimeout(()=>
   {
    if(searchCache[searchQuery]){
      console.log("searchCache[searchQuery]", searchCache[searchQuery])
      setSuggestions(searchCache[searchQuery])
    }
     else{
      getSearchSuggestion();
     }
   },
     
     200);
    return () =>{
      clearTimeout(timer)
    }
  }, [searchQuery])
  const searchHandler = (e) => {
    setSearchQuery(e.target.value)
  }
  const getSearchSuggestion = async() => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    console.log("data in head", data)
    console.log("data in head", data[1])
    setSuggestions(data[1]);

    //update cache 
    dispatch(cacheResults(
      {
        [searchQuery] : data[1],
      }
    ))
  }
  const focusHandler = () => {
    showSetSuggestion(true)
  }
  const blurHandler = () => {
    showSetSuggestion(false)
  }
  return (
    <div className='grid grid-flow-col p-3 mb-5 '>
        <div className='flex col-span-1'>
            <img onClick={toggleMenuHandler} className="h-9 cursor-pointer" alt="menu" src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"/>
            <a href="/"><img className="h-9 ml-4"  alt="logo " src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" /></a>
        </div>
        <div className='col-span-10 mb-2 relative'>
          <div>
            <input type="text" className='w-1/2 border border-gray-400 p-2 pb-1 border-r-0 rounded-l-full' value={searchQuery} onChange={searchHandler} 
            onBlur={blurHandler} onFocus={focusHandler}/>
            <button type="submit" className='border border-gray-400 p-2 px-4  align-top rounded-r-full bg-gray-100' >
            <img alt=" " className="h-5" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"/></button>
          </div>
          {(showSuggestion && searchQuery.length !== 0) && <div className='absolute bg-white py-2  w-6/12  shadow-sm rounded-xl border border-gray-200'>
            <ul>
              {suggestions.map((s) =>(
                <li key={s} className="py-2 px-5 hover:bg-gray-100"> <img className="h-5 pr-2 inline" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"/>{s}</li>
              )
              )}
            </ul>
          </div>}
        </div>
        <div className='col-span-1'>
            <img className="h-9" alt="user " src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
        </div>
    </div>
  )
}

export default Head
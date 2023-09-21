import {useState} from 'react';
import './App.css';
import Heading from "./Heading";
import Content from "./Content";



function App() {
  const[word, setWord] = useState('');
  const[results, setResults] = useState(null)
function HandleInputChange(e) {
setWord(e.target.value)
}

const SearchWord = async () => {
const response = await fetch ("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
const data = await response.json();

setResults(data[0]);
};

const heading = () => {
  const audio = results?.phonetics.find( (phone) => phone.audio !== "")?.audio;
return {
  audioUrl: audio ,
  word: results?.word ,
  phonetic: results?.phonetic
}
}

  return (
    <div >

    <div className="container text-center shadow my-4 p-4 rounded">

       <nav className="text my-2 fs-4 fw-bold mt-4">
 <i class="fa-xl fa-solid fa-book"></i>
   </nav>
      <h1 className="mt-4" >Dictionary App</h1>
  

   <div className="input-group my-2">
   <input type="text"
   value={word}
   onChange= {HandleInputChange}
    placeholder='Search word' 
    className="form-control bg-light border-0 rounded px-3 py-3"/>
   <div className="input-group-append">
   <button className="btn bg-light-emphasis end-0 py-2 pb-4" 
   id="searchButton"
   type="button"
   onClick={SearchWord}
   ><i className="fa-solid fa-magnifying-glass fa-lg pt-4 "></i></button>
    </div>
    </div>

    <p className="text-secondary">suggested words: sunset, coding, yoga, plant...</p>


      {results && results.meanings && results.meanings.length > 0 && (
        <>
           <Heading {...heading()}/>

          {results.meanings.map((content, index) => {
            return <Content {...content} key={index}/>;
          })}
          </>
      )}
    <p className=" " id="coder">Open source code by <a href="https://github.com/wardahsharif">Wardah Sharif</a></p>

     

</div>
</div>
  );
}

export default App;

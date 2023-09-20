import React from 'react'


const Content = ({partOfSpeech, definitions, synonyms}) => {
    return (
        <div>
                  <div className="my-3">
<div className="d-flex flex-row align-items-center fw-bold fs-4">
  <p>
    {partOfSpeech}
  </p>
  <hr className="w-100 mx-4"/>
</div>

<div>
<p className="text-start text-secondary-subtle fw-semibold">Meaning</p>
<ul className="px-4 text-secondary text-start">
  {
   definitions.map(( def , index) => (
    <li key={index}>
  {def.definition}
</li>
  ))
}

</ul>

{synonyms.length > 0 && (
  <>
<p className="text-start">
  Synonyms{''}
   {synonyms.map((synonym, index) => (
  <span key={index} className="text-secondary mx-3"  style={{ wordWrap: 'break-word' }}>{synonym}</span>
  )) }
  </p>
  </>
)}

      </div>
      
</div>
        </div>
    )
}

export default Content;
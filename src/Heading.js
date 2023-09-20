import React , {useRef} from 'react'

   const Heading = ({audioUrl, word, phonetic}) => {
    const ref = useRef();

    const playAudio = () => {
      ref.current.play();
    }

     return (
     <div>
     <div className=" d-flex flex-row justify-content-between my-2 p-2 round">
      <h3 className="fs-2 fw-bold text-capitalize">
        {word}
      <br/><span className="fs-5 fw-light">{phonetic}</span>
      </h3>
      
        <button onClick={playAudio} className="btn btn-light rounded-circle px-4"><i class="fa-solid fa-play"></i></button>
      
      <audio className="hidden" ref={ref} src={audioUrl}/>
    </div>
    </div>
   )}

   export default Heading;
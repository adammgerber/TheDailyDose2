import React, {useState} from 'react'


function App() {

  const [data, setData] = useState([{}])
   
  const onClickHandler = () => {
    fetch("https://adammgerber.github.io/words.json").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }

  const onClickHandlerArticle = () => {
    fetch("/getarticle")
  }


  return (
   
    <div>
      <nav className="flex items-center justify-center bg-gray-600 p-3 h-max flex-wrap">
        <h1 className="font-word lg:text-6xl sm:text-5xl text-gray-300">The Daily Dose</h1>
      </nav>
        <div className="h-screen overflow-y-scroll pt-10 justify-center bg-gray-500 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          
          <div className="space-x-4 h-1/6 pt-4 text-center">
            <button className="inline-block rounded-md bg-green-500 px-10 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400" onClick={onClickHandler}>Study Words</button>
            <button className="inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-white shadow-md duration-75 hover:bg-red-400" onClick={onClickHandlerArticle}>Read Article</button>
          </div>

          

          <div className="card grid grid-cols-4 gap-10">
            {data.map( (words,i) => { return (
              <div className="grid grid-rows-2 h-64 w-64 rounded-lg justify-center items-center bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl" key={i}>
                <h3 className=" mt-2 text-center text-2xl font-bold text-gray-500">{words.words}</h3>
                <div className='button container space-x-2'>
                  <button className="p-2 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10">
                    Define
                  </button>
                  <button className="p-2 rounded-lg bg-green-400 hover:bg-green-500 font-bold text-white shadow-lg shadow-green-200 transition ease-in-out duration-200 translate-10">
                    Add
                  </button>
                  <button className="p-2 rounded-lg bg-red-400 hover:bg-red-500 font-bold text-white shadow-lg shadow-red-200 transition ease-in-out duration-200 translate-10">
                    Delete
                  </button>
                </div>
              </div>
              )})
            }
          </div>

        </div>
        
      </div>
 
  );
}

export default App;

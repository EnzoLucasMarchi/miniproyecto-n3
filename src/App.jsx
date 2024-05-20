import { useEffect, useState } from 'react'
import Nav from './assets/components/Nav'
import CardGroup from './assets/components/CardGroup'
import './index.css'

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  const getData = async ()=>{
    const rsJson = await ((await fetch ('/stays.json')).json())
    const rs = await rsJson.map((stay, index)=>({...stay, id : index}))
    setData(rs)
    setFilter(rs)
  }

  useEffect(()=>{
    
    getData()
  }, []);

  return (
    <>
      <div className="body">
                <Nav/>
            <CardGroup data={data} filter={filter} setFilter={setFilter}/>

      </div>
    </>
  )
}

export default App

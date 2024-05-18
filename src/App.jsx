import { useEffect, useState } from 'react'
import Nav from './assets/components/Nav'
import CardGroup from './assets/components/CardGroup'
import './index.css'

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  const getData = async ()=>{
    const rs = await fetch ('/stays.json')
    const rsJson = await rs.json()
    setData(rsJson)
    setFilter(rsJson)
  }

  useEffect(()=>{
    getData()
  }, []);

  return (
    <>
      <div className="body">
          <div className="nav-conatiner">
                <Nav/>
          </div>
          <div className='card-section-container'>
            <CardGroup/>
          </div>

      </div>
    </>
  )
}

export default App

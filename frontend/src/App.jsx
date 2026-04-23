import { useState, useEffect } from 'react'
import roadmapService from './services/roadmapService'
import RoadmapList from './components/RoadmapList'

function App() {
  const [roadmapItems, setRoadmapItems] = useState([])

  // Funcion para buscar los items al backend
  useEffect( () => {
      const buscarItems = async () => {
        const data = await roadmapService.getAll()
        setRoadmapItems(data)
      }
      buscarItems()
    }
  ,[]) // Array vacio, ejecuta el buscarItems solo al montar el componente

  return(
    <>
      <div>
        <h1>
          Roadmap Tracker
        </h1>
      </div>
      <div>
        <RoadmapList roadmapItems={roadmapItems}/>
      </div>
    </>
  )
}

export default App

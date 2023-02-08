import { useEffect, useState } from 'react'
import Main from './components/Main'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://thronesapi.com/api/v2/Characters')
      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-600 min-h-screen w-full py-10'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
        Game Of Thrones
      </h1>

      <Main data={data} />
    </div>
  )
}

export default App

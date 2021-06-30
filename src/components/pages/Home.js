import React from 'react'

import '../../App.css'
import Cards from '../Cards'
import Dateview from '../DateView'

function Home() {
    return (
        <>
        
          <div>
              <Dateview />
              <Cards />
          </div>  
        </>
    )
}

export default Home

import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      <div id="explore-menu">
        <ExploreMenu
          category={category}
          setCategory={setCategory}
        />
      </div>

      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
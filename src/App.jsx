import { useState } from "react"
import Filters from "./components/Filters"
import Jobs from "./components/Jobs"
import "./scss/App.scss"
import data from "../data.json"

function App() {
  const [chosenFilters, setChosenFilters] = useState([])
  const [isReloading, setIsReloading] = useState(false)
  const jobsData = data.map((item) => {
    return {
      ...item,
      allSkills: [item.role, item.level, ...item.languages, ...item.tools],
    }
  })

  function addFilter(e) {
    const filter = e.target.innerText
    if (!chosenFilters.includes(filter)) {
      setIsReloading(true)
    }
    setTimeout(() => {
      setChosenFilters((prevFilters) => {
        if (!prevFilters.includes(e.target.innerText)) {
          return [...prevFilters, filter]
        } else return prevFilters
      })
      setIsReloading(false)
    }, 100)
  }

  function removeFilter(e) {
    const filter = e.target.innerText
    setChosenFilters((prevFilters) => {
      return prevFilters.filter((item) => item !== filter)
    })
  }

  function removeAllFilters() {
    setChosenFilters([])
  }

  return (
    <>
      <header></header>
      {chosenFilters.length > 0 && (
        <Filters
          chosenFilters={chosenFilters}
          removeFilter={removeFilter}
          removeAllFilters={removeAllFilters}
        />
      )}
      <Jobs
        isReloading={isReloading}
        chosenFilters={chosenFilters}
        addFilter={addFilter}
        data={
          chosenFilters.length
            ? jobsData.filter((item) =>
                chosenFilters.every((filter) => item.allSkills.includes(filter))
              )
            : jobsData
        }
      />
    </>
  )
}

export default App

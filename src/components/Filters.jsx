import "../scss/Filters.scss"
import { useRef } from "react"

export default function Filters(props) {
  const filtersElement = useRef()

  return (
    <div className="filters" ref={filtersElement}>
      <div className="filters__names">
        {props.chosenFilters.map((filter) => {
          return (
            <div
              className="filters__name"
              key={filter}
              onClick={(e) => {
                if (props.chosenFilters.length === 1) {
                  filtersElement.current.classList.add(
                    "filters__remove-animation"
                  )
                  setTimeout(() => props.removeFilter(e), 300)
                } else props.removeFilter(e)
              }}
            >
              {filter}
            </div>
          )
        })}
      </div>
      <button
        className="filters__clear"
        onClick={() => {
          filtersElement.current.classList.add("filters__remove-animation")
          setTimeout(() => props.removeAllFilters(), 300)
        }}
      >
        Clear
      </button>
    </div>
  )
}

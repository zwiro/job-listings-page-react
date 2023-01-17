import "../scss/Jobs.scss"

export default function Jobs(props) {
  return (
    <main
      className={
        props.isReloading
          ? "job-listings job-listings__reloading"
          : "job-listings"
      }
    >
      {props.data.map((item) => {
        return (
          <div
            className={
              item.featured
                ? "job-listings__offer job-listings__offer--featured"
                : "job-listings__offer"
            }
            key={item.id}
          >
            <img className="job-listings__image" src={item.logo} />
            <div className="job-listings__desktop-container">
              <div className="job-listings__title">
                <p className="job-listings__company">{item.company}</p>
                {item.new && (
                  <div className="job-listings__tag job-listings__tag--new">
                    NEW!
                  </div>
                )}
                {item.featured && (
                  <div className=" job-listings__tag job-listings__tag--featured">
                    FEATURED
                  </div>
                )}
              </div>
              <p className="job-listings__profession">{item.position}</p>
              <div className="job-listings__details">
                <p className="job-listings__date">{item.postedAt} &#x2022;</p>
                <p className="job-listings__type">{item.contract} &#x2022;</p>
                <p className="job-listings__location">{item.location}</p>
              </div>
            </div>
            <div className="job-listings__skills">
              <div
                className={
                  props.chosenFilters.includes(item.role)
                    ? "job-listings__skill job-listings__skill--chosen"
                    : "job-listings__skill"
                }
                onClick={(e) => props.addFilter(e)}
              >
                {item.role}
              </div>
              <div
                className={
                  props.chosenFilters.includes(item.level)
                    ? "job-listings__skill job-listings__skill--chosen"
                    : "job-listings__skill"
                }
                onClick={(e) => props.addFilter(e)}
              >
                {item.level}
              </div>
              {item.languages.map((language, i) => {
                return (
                  <div
                    className={
                      props.chosenFilters.includes(language)
                        ? "job-listings__skill job-listings__skill--chosen"
                        : "job-listings__skill"
                    }
                    key={i}
                    onClick={(e) => props.addFilter(e)}
                  >
                    {language}
                  </div>
                )
              })}
              {item.tools.map((tool, i) => {
                return (
                  <div
                    className={
                      props.chosenFilters.includes(tool)
                        ? "job-listings__skill job-listings__skill--chosen"
                        : "job-listings__skill"
                    }
                    key={i}
                    onClick={(e) => props.addFilter(e)}
                  >
                    {tool}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}

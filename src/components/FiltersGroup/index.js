import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    locationsList,
    changeEmployeeList,
    changeSalary,
    changeLocationList,
    selectedLocations = [],
    searchInput,
    changeSearchInput,
    getJobs,
  } = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={changeSearchInput}
        onKeyDown={onEnterSearchInput}
        aria-label="Search jobs"
      />
      <button
        type="button"
        data-testid="searchButton"
        className="search-button-container"
        onClick={getJobs}
        aria-label="Search jobs"
      >
        <BsSearch className="search-icon" />
      </button>
    </div>
  )

  const renderTypeOfEmployment = () => (
    <div className="employment-type-container">
      <h1 className="employment-type-heading">Type of Employment</h1>
      <ul className="employment-type-list-container">
        {employmentTypesList.map(each => (
          <li className="employee-item" key={each.employmentTypeId}>
            <input
              type="checkbox"
              id={each.employmentTypeId}
              value={each.employmentTypeId}
              onChange={e => changeEmployeeList(e.target.value)}
            />
            <label htmlFor={each.employmentTypeId} className="check-label">
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderSalaryRange = () => (
    <div className="salary-range-container">
      <h1 className="salary-range-heading">Salary Range</h1>
      <ul className="salary-range-list-container">
        {salaryRangesList.map(each => (
          <li className="salary-item" key={each.salaryRangeId}>
            <input
              type="radio"
              id={each.salaryRangeId}
              value={each.salaryRangeId}
              name="salary"
              className="check-input"
              onChange={() => changeSalary(each.salaryRangeId)}
            />
            <label htmlFor={each.salaryRangeId} className="check-label">
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderLocations = () => (
    <div className="locations-container">
      <h1 className="locations-heading">Locations</h1>
      <ul className="locations-list-container">
        {locationsList.map(loc => (
          <li className="location-item" key={loc.locationId}>
            <input
              type="checkbox"
              id={loc.locationId}
              value={loc.locationId}
              checked={selectedLocations.includes(loc.locationId)}
              onChange={e => changeLocationList(e.target.value)}
            />
            <label htmlFor={loc.locationId} className="check-label">
              {loc.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
      <hr className="horizontal-line" />
      {renderLocations()}
    </div>
  )
}

export default FiltersGroup

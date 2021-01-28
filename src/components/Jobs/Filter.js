import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function JobsFilter({
  filterJobs,
  departments,
  locations,
  selectedDepartment,
  selectedLocation,
  setSelectedDepartment,
  setSelectedLocation,
}) {
  useEffect(() => {
    filterJobs();
  }, [selectedDepartment, selectedLocation]);

  const onSelectHandler = (category, value) => {
    if (category === 'department') {
      setSelectedDepartment(value);
    } else if (category === 'location') {
      setSelectedLocation(value);
    }
  };

  return (
    <div className='jobs-filter-container'>
      <div className='select-container'>
        <h4 className='label-uppercase'>Department</h4>
        <div className='select'>
          <select
            value={selectedDepartment}
            onChange={(e) => onSelectHandler('department', e.target.value)}
          >
            <option value='all'>All Departments</option>
            {Object.keys(departments).map((key) => (
              <option value={departments[key].id} key={departments[key].id}>
                {departments[key].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='select-container'>
        <h4 className='label-uppercase'>Location</h4>
        <div className='select'>
          <select
            value={selectedLocation}
            onChange={(e) => onSelectHandler('location', e.target.value)}
          >
            <option value='all'>All Locations</option>
            {Object.keys(locations).map((key) => (
              <option value={locations[key].id} key={locations[key].id}>
                {locations[key].name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

JobsFilter.propTypes = {
  filterJobs: PropTypes.func.isRequired,
  departments: PropTypes.object.isRequired,
  locations: PropTypes.object.isRequired,
  selectedDepartment: PropTypes.string.isRequired,
  selectedLocation: PropTypes.string.isRequired,
  setSelectedDepartment: PropTypes.func.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
};

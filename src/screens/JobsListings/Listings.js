import React, { useState, useEffect } from 'react';

import JobsHero from '../../components/Jobs/Hero';
import JobsFilter from '../../components/Jobs/Filter';
import JobsList from '../../components/Jobs/List';

import data from '../../data/job_listings.json';

export default function JobsListingsScreen() {
  const [jobPostings, setJobPostings] = useState(data.jobs);
  const [departments, setDepartments] = useState({});
  const [locations, setLocations] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    groupDepartmentOptions();
    groupLocationOptions();
  }, []);

  /**
   * @desc Creating the departments object and storing it in state
   * @key department id
   * @values department id, name, object of job ids as keys
   */
  const groupDepartmentOptions = () => {
    const options = {};

    jobPostings.forEach((job) => {
      if (!options[job.department.id]) {
        options[job.department.id] = {
          ...job.department,
          jobIds: { [job.id]: true },
        };
      } else {
        options[job.department.id].jobIds[job.id] = true;
      }
    });

    setDepartments(options);
  };

  /**
   * @desc Creating the locations object and storing it in state
   * @key location id
   * @values location id, name, object of job ids as keys
   */
  const groupLocationOptions = () => {
    const options = {};

    jobPostings.forEach((job) => {
      job.offices.map((office) => {
        if (!options[office.id]) {
          options[office.id] = { ...office, jobIds: { [job.id]: true } };
        } else {
          options[office.id].jobIds[job.id] = true;
        }
      });
    });

    setLocations(options);
  };

  const filterJobs = () => {
    let jobs = [...data.jobs];
    let departmentJobs = departments[selectedDepartment];
    let locationJobs = locations[selectedLocation];

    if (departmentJobs && locationJobs) {
      jobs = jobs.filter((job) => {
        if (departmentJobs.jobIds[job.id] && locationJobs.jobIds[job.id]) {
          return true;
        }
        return false;
      });
    } else if (departmentJobs) {
      jobs = jobs.filter((job) => {
        if (departmentJobs.jobIds[job.id]) {
          return true;
        }
        return false;
      });
    } else if (locationJobs) {
      jobs = jobs.filter((job) => {
        if (locationJobs.jobIds[job.id]) {
          return true;
        }
        return false;
      });
    }

    setJobPostings(jobs);
  };

  return (
    <>
      <JobsHero />
      <JobsFilter
        filterJobs={filterJobs}
        departments={departments}
        locations={locations}
        selectedDepartment={selectedDepartment}
        selectedLocation={selectedLocation}
        setSelectedDepartment={setSelectedDepartment}
        setSelectedLocation={setSelectedLocation}
      />
      <JobsList
        jobPostings={jobPostings}
        departments={departments}
        selectedDepartment={selectedDepartment}
      />
    </>
  );
}

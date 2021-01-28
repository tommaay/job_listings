import React from 'react';
import PropTypes from 'prop-types';

import JobPosting from './Post';

import engineeringImg from '../../assets/engineering.png';
import customerSuccessImg from '../../assets/customer-success.png';
import marketingImg from '../../assets/marketing.png';

const DEPARTMENT_IDS = {
  ENGINEERING: '92385',
  CUSTOMER_SUCCESS: '62832',
  MARKETING: '35820',
};

export default function JobsList({
  jobPostings,
  departments,
  selectedDepartment,
}) {
  return (
    <div className='jobs-list-container'>
      {selectedDepartment === 'all' ||
      selectedDepartment === DEPARTMENT_IDS.ENGINEERING ? (
        <div className='department-list-container'>
          <div className='department-heading'>
            <img src={engineeringImg} alt='Engineering' />
            <h2 className='heading-2'>Engineering</h2>
          </div>

          <div className='job-postings-grid'>
            {jobPostings.map((job) => {
              if (
                departments[DEPARTMENT_IDS.ENGINEERING] &&
                departments[DEPARTMENT_IDS.ENGINEERING].jobIds[job.id]
              ) {
                return <JobPosting job={job} key={job.id} />;
              }
            })}
          </div>
        </div>
      ) : null}

      {selectedDepartment === 'all' ||
      selectedDepartment === DEPARTMENT_IDS.CUSTOMER_SUCCESS ? (
        <div className='department-list-container'>
          <div className='department-heading'>
            <img src={customerSuccessImg} alt='Customer Success' />
            <h2 className='heading-2'>Customer Success</h2>
          </div>

          <div className='job-postings-grid'>
            {jobPostings.map((job) => {
              if (
                departments[DEPARTMENT_IDS.CUSTOMER_SUCCESS] &&
                departments[DEPARTMENT_IDS.CUSTOMER_SUCCESS].jobIds[job.id]
              ) {
                return <JobPosting job={job} key={job.id} />;
              }
            })}
          </div>
        </div>
      ) : null}

      {selectedDepartment === 'all' ||
      selectedDepartment === DEPARTMENT_IDS.MARKETING ? (
        <div className='department-list-container'>
          <div className='department-heading'>
            <img src={marketingImg} alt='Marketing' />
            <h2 className='heading-2'>Marketing</h2>
          </div>

          <div className='job-postings-grid'>
            {jobPostings.map((job) => {
              if (
                departments[DEPARTMENT_IDS.MARKETING] &&
                departments[DEPARTMENT_IDS.MARKETING].jobIds[job.id]
              ) {
                return <JobPosting job={job} key={job.id} />;
              }
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

JobsList.propTypes = {
  jobPostings: PropTypes.array.isRequired,
  departments: PropTypes.object.isRequired,
  selectedDepartment: PropTypes.string.isRequired,
};

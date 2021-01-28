import React from 'react';
import PropTypes from 'prop-types';

export default function JobPosting({ job }) {
  let departmentClassName;

  switch (job.department.name) {
    case 'Engineering':
      departmentClassName = 'engineering';
      break;
    case 'Customer Success':
      departmentClassName = 'customer-success';
      break;
    case 'Marketing':
      departmentClassName = 'marketing';
      break;
    default:
      return;
  }

  return (
    <div className={`job-post ${departmentClassName}`}>
      <a href={`https://airtable.com/jobs/${job.id}`} target='_blank'>
        <p className='label'>
          {job.offices.map((office) => office.name).join(', ')}
        </p>
        <h3 className='heading-3'>{job.title}</h3>
      </a>
    </div>
  );
}

JobPosting.propTypes = {
  job: PropTypes.object.isRequired,
};

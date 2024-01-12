import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { Job } from '@/utils/jobType';
import { setJobs } from '@/redux/jobSlice';
import jobsData from '@/utils/jobs.json';
import { Card, TextField, Typography } from '@mui/material';

const JobList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.jobs);
  const [showJobs, setShowJobs] = useState<Job[]>([]);

  useEffect(() => {
    dispatch(setJobs(jobsData));
    setShowJobs(jobs);
  }, [dispatch, jobs]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredJobs = jobs.filter(
        (job) =>
          job.job_title.toLowerCase().includes(search.toLowerCase()) ||
          job.company_name.toLowerCase().includes(search.toLowerCase())
      );
      setShowJobs(filteredJobs);
    }, 300); 

    return () => clearTimeout(timeoutId);
  }, [search, jobs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <TextField
        label="Search Jobs...."
        variant="outlined"
        value={search}
        onChange={handleChange}
        style={{ backgroundColor: 'white' }}
        sx={{
          boxShadow: 3,
          bgcolor: 'background.paper'
        }}
      />

<Card>{showJobs.length === 0 && <p>No Jobs Available</p>}</Card>
      {showJobs.map((job: Job) => (
        <Card key={job.id} style={{border: '1px solid black'}}>
          <Typography color={'blue'} variant="h6">{job.job_title}</Typography>
          <Typography variant="subtitle1">{job.company_name}</Typography>
          <Typography variant="h6">{job.job_description}</Typography>
        </Card>
      ))}
    </div>
  );
};

export default JobList;

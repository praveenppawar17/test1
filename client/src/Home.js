import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import { getAllJobs } from "./service/api";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const response = await getAllJobs();
      if (response.isSuccess) {
        setJobs([...jobs, ...response.jobResponse.data]);
      }
    };
    getJobs();
  }, []);
  return (
    <>
      <Box style={{ margin: 30 }}>
        <JobComponent data={jobs} />
      </Box>
    </>
  );
};

export default Home;

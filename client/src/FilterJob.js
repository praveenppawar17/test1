import {
  AppBar,
  Box,
  Grid,
  Paper,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllJobs } from "./service/api";
import { date_diff_indays } from "./utility/timeConversion";

const Header = styled(AppBar)`
  background: #fbfdfd;
  width: 80%;
  margin: 5% 10%;
  border-radius: 5px;
  // pointer:cursor;
  & > div {
    margin-left: auto;
  }
`;
const Img = styled("img")({
  margin: "auto",
  maxWidth: "80%",
  maxHeight: "80%",
  borderRadius: "50%",
  objectFit: "cover",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const FilterJob = () => {
  const { search } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const response = await getAllJobs(search);
      if (response.isSuccess) {
        setJobs([...jobs, ...response.jobResponse.data]);
      }
    };
    getJobs();
  }, []);

  return (
    <>
      <Header position="sticky">
        <Toolbar>
          <Link to="/">Clear</Link>
        </Toolbar>
      </Header>

      <Box>
        {jobs.map((job) => (
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 800,
              marginBottom: 3,
              flexGrow: 1,
              borderRadius: "5px",
              backgroundColor: "#fbfdfd",
              elevation: 3,
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={2} xs={12} sm={2}>
                <Box sx={{ width: 100, height: 80, display: "flex" }}>
                  <Img alt="compnay logo" src={job.companyLogo} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} lg={8} container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      align="left"
                    >
                      {job.companyName}{" "}
                      {date_diff_indays(new Date(), job.postedOn) === "New" ? (
                        <span className="spantext">New!</span>
                      ) : (
                        ""
                      )}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="left">
                      {job.jobTitle}
                    </Typography>
                    <Box align="left">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        display="inline"
                        margin="4px 4px 4px 0"
                      >
                        {date_diff_indays(new Date(), job.postedOn)}
                      </Typography>
                      &bull;
                      <Typography
                        display="inline"
                        margin="3px"
                        variant="body2"
                        color="text.secondary"
                      >
                        {job.jobType}
                      </Typography>
                      &bull;
                      <Typography
                        display="inline"
                        margin="3px"
                        variant="body2"
                        color="text.secondary"
                      >
                        {job.location}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item display="flex" sm={12} lg={3} xs={12}>
                  {job.keySkills?.map((skill, i) => (
                    <Typography
                      key={i}
                      color="#0f8080"
                      sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      margin="5px"
                    >
                      {skill}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default FilterJob;

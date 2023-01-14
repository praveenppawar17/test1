import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { date_diff_indays } from "./utility/timeConversion";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const JobComponent = ({ data }) => {
  return (
    <>
      {data?.map((job, id) => (
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
          key={id}
        >
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12} sm={2}>
              <Box sx={{ width: 100, height: 80, display: "flex" }}>
                <Img alt="compnay logo" src={job?.companyLogo} />
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
                    {date_diff_indays(new Date(), job?.postedOn) === "New" ? (
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
                      {date_diff_indays(new Date(), job?.postedOn)}
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
                    <StyledLink
                      display="inline"
                      margin="3px"
                      fontSize="5px !important"
                      to={`/job/${job?.location}`}
                    >
                      {job.location}
                    </StyledLink>
                  </Box>
                </Grid>
              </Grid>
              <Grid item display="flex" sm={12} lg={3} xs={12}>
                {job?.keySkills?.map((skill, i) => (
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
    </>
  );
};

export default JobComponent;

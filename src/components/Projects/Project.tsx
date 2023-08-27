import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    flexDirection: "row",
    padding: "20px",
    boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
  },
  projectMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  project: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    flexDirection: "row",
    padding: "20px",
    boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
  },
}));

export const Project = () => {
  const classes = useStyles();
  const [projectName, setProjectName] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(true);

  const handleAddProject = (data: any) => {
    console.log("data", data);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const projects = useSelector((state: any) => state.projects);
  console.log("projects", projects);

  return (
    <React.Fragment>
      <Grid container spacing={1} margin="0px" className={classes.root}>
        <Grid xs={8} md={6} sm={4} className={classes.addData}>
          <TextField
            id="outlined-controlled"
            label="Add Project Name"
            value={projectName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setProjectName(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleAddProject(projectName);
            }}
          >
            Add Project
          </Button>
        </Grid>
      </Grid>
      {projects?.map((e: any) => (
        <Grid
          container
          spacing={1}
          margin="10px"
          className={classes.projectMain}
        >
          <Grid xs={8} md={6} sm={4} className={classes.project}>
            <React.Fragment key={e?.projectName}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={e?.projectName} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {e?.tasks.map((task: string, index: number) => (
                      <ListItemButton key={index} sx={{ pl: 4 }}>
                        <ListItemText primary={task} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </List>
            </React.Fragment>
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

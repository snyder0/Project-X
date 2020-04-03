import React, { Fragment } from "react";
import {
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Counter from "../components/counter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(58),
        height: theme.spacing(25),
      },
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h2>Daily Challenges</h2>
        <Counter />
      </Paper>
      <Paper elevation={3}>
        <h2>Leaderboard</h2>
        <p>Home</p>
      </Paper>
      <Paper elevation={3}>
        <h2>Library</h2>
        <p>Home</p>
      </Paper>
      <Paper elevation={3}>
        <h2>Learning Modules</h2>
        <p>Home</p>
      </Paper>
    </div>
  );
};

export default Home;

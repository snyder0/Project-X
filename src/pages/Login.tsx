import React, { useState } from "react";
import {
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    register: {
      marginBottom: "1rem"
    }
  })
);

const Login: React.FC = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");

  function handleEmail(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setEmail(e.currentTarget.value);
  }

  function handlePassword(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setPassword(e.currentTarget.value);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8}>
          <Card elevation={3}>
            <form onSubmit={e => handleSubmit(e)}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={10}>
                  <Typography align="center" variant="h2">
                    Project-X
                  </Typography>
                  <Typography align="left" variant="h5">
                    Login
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    autoComplete="email"
                    color="primary"
                    fullWidth
                    required
                    onChange={e => handleEmail(e)}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    autoComplete="current-password"
                    color="primary"
                    fullWidth
                    required
                    onChange={e => handlePassword(e)}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid
                  container
                  item
                  justify="flex-start"
                  xs={10}
                >
                  <Button
                    className={classes.register}
                    color="primary"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

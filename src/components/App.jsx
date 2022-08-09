import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';
import useStyles from './styles';
import useAlan from './Alan';

function App() {
  const classes = useStyles();

  useAlan();
  const alanButtonContainer = useRef();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Switch>
            <Route path="/movie/:id" exact>
              <MovieInformation />
            </Route>
            <Route path="/actors/:id" exact>
              <Actors />
            </Route>
            <Route path={['/', '/approved']} exact>
              <Movies />
            </Route>
            <Route path="/profile/:id" exact>
              <Profile />
            </Route>
          </Switch>
        </div>
      </main>
      <div ref={alanButtonContainer} />
    </div>
  );
}

export default App;

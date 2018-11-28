import AppBar from '@material-ui/core/AppBar';
import Calendar from './Calendar'
import Grid from '@material-ui/core/Grid';
import Notes from './Notes'
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

function dateToEpoch(thedate) {
  thedate.setHours(0,0,0,0);
  return thedate;
}

function NavBar(props) {
  return (
    <div className="navBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Jot
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class App extends Component {
  updateDate=(newDate) => {
    this.setState({
      date: newDate
    })
  }

  state={
    date: dateToEpoch(new Date()),
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Grid container>
          <Grid container xs={6} justify={'center'}>
              <Calendar
              calendarType="US"
              changeDate={this.updateDate}
              date={this.state.date}
              />
          </Grid>
          <Grid item xs={4}>
                  <Notes
                  date={this.state.date}
                  />
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default App;

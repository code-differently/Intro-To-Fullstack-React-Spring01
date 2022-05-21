import React, {useState, useEffect} from 'react';
import AddPerson from './components/AddPerson';
import Grid from '@mui/material/Grid';
import PersonTable from './components/PersonTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
/* We will need to remove this once we connect the server */
import {mockData} from './mockData';

const theme = createTheme();
function App() {
  const [personTableData, setPersonTableData] = useState(mockData);
  
  useEffect(()=> {
    /* insert page Load code here */
  },[]);

  const postToServer = (data) => {
      console.log(data);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="">
        <CssBaseline />

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <AddPerson callBackFunction={postToServer} /> 
      </Grid>
      <Grid item xs={8}>
        <PersonTable data={personTableData}/>
      </Grid>
    </Grid>
    </Container>
    </ThemeProvider>
    
  );
}

export default App;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {

  const classes = useStyles();
  // create state variables for each input
  const [organization, setOrganization] = useState('');
  const [website, setWebsite] =  useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contactperson, setContactperson] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let data = JSON.stringify({
      "organization": organization,
      "website": website,
      "description": description,
      "address": address,
      "contactperson": contactperson,
      
      "email": email,
      "number": "number"
    });
  
    console.log(data)
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };
  
    fetch("http://localhost:5000/organizations/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    handleClose();

  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
        label="Organization"
        variant="filled"
        required
        value={organization}
        onChange={e => setOrganization(e.target.value)}
      />
      <TextField
        label="Website"
        variant="filled"
        required
        value={website}
        onChange={e => setWebsite(e.target.value)}
      />
      <TextField
        label="Description"
        variant="filled"
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
       <TextField
        label="Address"
        variant="filled"
      
        required
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
       <TextField
        label="Contact Person"
        variant="filled"
      
        required
        value={contactperson}
        onChange={e => setContactperson(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Contact no"
        variant="filled"
        type="number"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
     
      
      
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
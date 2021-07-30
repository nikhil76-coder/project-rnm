import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
  },
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
}));
var cardStyle = {
    position: 'absolute', 
    left:'20%',
    display: 'block',
    width: '60vw',
    
    
    transitionDuration: '0.3s',
    height: '30vw'
   
}


export default function Docform() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
       <Card style={cardStyle}>
      <CardContent>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Loan Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Home Loan</MenuItem>
          <MenuItem value={20}>Car Loan</MenuItem>
          <MenuItem value={30}>Gold Loan</MenuItem>
        </Select>
       </FormControl>
       <br/>
      <FormControl className={classes.formControl}>
      <span className="userShowInfoTitle">ADHAR:</span>
          <label   className="custom-file-upload"  label="Required" >
          <input type="file" multiple ></input>
         </label>
      </FormControl>
        <FormControl className={classes.formControl}>
        <span className="userShowInfoTitle">PAN CARD:</span>
          <label   className="custom-file-upload"  label="Required" >
          <input type="file" multiple ></input>
         </label>
      </FormControl>
      <FormControl className={classes.formControl}>
      <span className="userShowInfoTitle">SIGNATURE:</span>
          <label   className="custom-file-upload"  label="Required" >
          <input type="file" multiple ></input>
         </label>
      </FormControl>
      <FormControl className={classes.formControl}>
      <span className="userShowInfoTitle">DECLARATION:</span>
          <label   className="custom-file-upload"  label="Required" >
          <input type="file" multiple ></input>
         </label>
    </FormControl>
    <FormControl className={classes.formControl}>
    <Button variant="contained" color="primary" >
         Submit
         </Button>
      </FormControl>
     </CardContent>
      <CardActions >
        
      </CardActions>
    </Card>
     
      
      
    </div>
  );
}

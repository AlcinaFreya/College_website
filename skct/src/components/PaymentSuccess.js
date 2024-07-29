import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
  const navigate = useNavigate();

  const handleNext=()=>{
    alert("Payment Done Successfully!")
    navigate('/');

  }
  return (
    <div>
    <style>
      {`body {
font-family: 'Arial', sans-serif;
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #f7f7f7;
}

header {
background-color: #333;
color: white;
text-align: center;
padding: 1rem;
}

main {
max-width: 800px;
margin: 20px auto;
padding: 20px;
background-color: #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
margin-bottom: 20px;
}

h2 {
color: #333;
}

form {
display: flex;
flex-direction: column;
}

label {
margin-bottom: 8px;
color: #555;
}

input {
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
}

button {
background-color: #4caf50;
color: white;
padding: 15px;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
}

button:hover {
background-color: #45a049;
}

footer {
text-align: center;
margin-top: 20px;
padding: 10px;
background-color: #333;
color: white;
}

/* Media query for responsiveness */
@media (max-width: 600px) {
main {
  padding: 10px;
}
}`}
</style>
<form onSubmit={handleNext}>
    <React.Fragment>
      <div style={{backgroundColor:"white",color:"black",marginLeft:"200px", marginRight:"200px",
    boxShadow:"80px",padding:"10px",marginTop:"50px",borderradius:"50%",
    

}}>
   <center>
      <Typography variant="h5" gutterBottom style={{marginTop:"80px"}}>
        <b>Payment method💳</b><hr></hr>
      </Typography>
     </center>
     <br></br><br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <center>
          
          <TextField
            required
            id="cardName"
            label="Name on card"
            
            autoComplete="cc-name"
            variant="standard" style={{marginLeft:"250px"}}
          /><br></br>
          </center>
        </Grid>
       <br></br>
        <Grid item xs={12} md={6}>
          <center>
          <TextField
            required
            id="cardNumber"
            label="Card number"
       
            autoComplete="cc-number"
            variant="standard" style={{marginRight:"250px"}}
         
          />
          </center>
        </Grid>

        <Grid item xs={12} md={6}>
          <center>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            
            autoComplete="cc-exp"
            variant="standard" style={{marginLeft:"250px"}}
          />
          </center>
        </Grid>
        <Grid item xs={12} md={6}>
          <center>
            <div class="cvv">
          <TextField 
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
           
            autoComplete="cc-csc"
            variant="standard"  style={{marginRight:"250px"}}
          />
          </div>
          </center>
        </Grid>
        <Grid item xs={12}>
          <center>
          <FormControlLabel
          
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />  <br></br><br></br> 
          
          <button type="submit">Submit</button>
          </center>
         
        </Grid>
     
        <Card/>
        <Box/>
      </Grid>
      </div>
      
    </React.Fragment>
    </form>
    </div>

   
  );
};
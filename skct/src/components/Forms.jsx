import React from 'react'

const Forms = () => {
    const formstyle={
      width: "100%",
      textAlign:"center",
      fontFamily:"verdana",
      fontSize:"20px",
      padding:"8px",
      backgroundColor:"grey",
  
    };
  return (
    <body style={formstyle}>
    <div>
        <h1>Registration  Form(Internal)</h1>
        <form>
        <label for="fname">First Name </label>
        <input type="text" id="fname" placeholder="enter your name" required></input><br></br>
        <label for="sname">Second Name</label>
        <input type="text" id="sname" placeholder='enter your name' required></input><br></br>
        <label for="bdate">DOB</label>
        <input type="date" id="bdate"></input> <br></br>
        <label for="age">Age</label>
        <input type="number" id="age" placeholder='enter your age' required></input><br></br>
        <label for="department">Department</label>
        <input type="text" id="department" placeholder='enter your department' required></input><br></br>
        <label for="gender">Gender</label>
        <input type="radio" id="gender" name="gender"></input>
        <label for="male">Male</label>
        <input type="radio" id="gender" name="gender"></input>
        <label for="female">Female</label>
        <input type="radio" id="gender" name="gender"></input>
        <label for="others">Others</label><br></br>
        <label for="email">E-mail </label>
        <input type="email" id="email" placeholder="abc@gmail.com" required></input><br></br>
        <br></br>
        <button type="button">Submit</button>
        <input type="reset"></input>
        </form>
    </div>
    </body>

  )
}

export default Forms
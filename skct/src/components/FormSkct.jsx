import React from 'react'
import './FormSkct.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HeaderA from './HeaderA';

const FormSkct = () => {
  return (
    <div>
    <HeaderA/>
    <br></br><br></br><br></br>
      <h2 style={{color:'orange'}}>FORM</h2><hr></hr>

      <div>
        
          <a href="https://data.skct.edu.in/media/Application_for_Payment_of_Condonation_fee.pdf">
          <button className="pdf-link">
          <CloudDownloadIcon style={{ marginRight: '9px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR PAYMENT OF CONDONATION FEE
            </button></a>
          <br></br>
          
          <a href="https://data.skct.edu.in/media/WorkRegistrationform.pdf">
          <button className="pdf-link">
          <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />PH.D COURSE WORK REGISTRATION FORM AND HALL TICKET
            </button></a>
        <br></br>
        <a href="https://data.skct.edu.in/media/No_dues.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />NO DUES APPLICATION
            </button></a>
            
            <br></br>
            <a href="https://skct.edu.in/v1/coe/Duplicate_Application.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR ISSUE OF NEW/DUPLICATE CERTIFICATE
            </button></a>
            <br></br>
            <a href="https://skct.edu.in/v1/coe/Namechange_Application.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR NAME CHANGE
            </button></a>
            <br></br>
            <a href="https://skct.edu.in/v1/coe/APPLICATION%20FOR%20ISSUE%20OF%20TRANSCRIPTS.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR TRANSCRIPTS
            </button></a>
            <br></br>
            <a href="https://skct.edu.in/v1/coe/Application_for_Withdrawn.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR WITHDRAEAL FROM END SEMESTER EXAMINATION
            </button></a>
            <br></br>
            <a href="https://skct.edu.in/v1/coe/Application%20for%20temporary%20break%20of%20study.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR TEMPORARY BREAK OF STUDY
            </button></a>
            <br></br>
            <a href="https://skct.edu.in/v1/coe/Application%20for%20Payment%20of%20Condonation%20fee.pdf" >
        <button className="pdf-link">
        <CloudDownloadIcon style={{ marginRight: '8px', verticalAlign: 'middle',color:'blue' }} />APPLICATION FOR CONDONATION FEE
            </button></a></div></div>

  )
}

export default FormSkct
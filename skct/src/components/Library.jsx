import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderA from './HeaderA';

const Library = () => {
    const [apidata, setApidate] = useState(null);
    const [apidata1, setApidate1] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setApidate(response.data[0].address.geo.lat);
                setApidate1(response.data[0].address.geo.lng);
                console.log("response=======>>>>>>>>", response);
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <HeaderA />
            <br /><br /><br />
            <h1 style={{ color: 'orange' }}>Library</h1>
            <hr />
            <h1>GEO-latitude: {apidata} longitude: {apidata1}</h1>
            <center>
                <img src='https://www.skct.edu.in/static/img/lib.0a5fb14.jpg' style={{ width: '500px', height: '500px' }} alt="Library" />
            </center>
            <h1 style={{ color: 'orange' }}>About</h1>
            <p>
                Welcome! In a time of rapid change, SKCT Central Library continues to stand at the center of intellectual life on campus, with world-class collections and services in print, online, and in person. Our Library serves as an indispensable partner in study, teaching and research at the College.
            </p>
            <h2 style={{ color: 'Blue' }}>Central Library</h2>
            <p>
                Our central library is one of the biggest college libraries in and around Coimbatore District with state-of-the-art facilities for comfortable access to the knowledge sources. With a built-up area of 5000 Sq.ft. and seating capacity of 250, it has comfortable spacious General Section, Reference section, Periodical section, Technical section, and Discussion room.
                Our library has RFID based koha automation software with web OPAC facility for easy search and location of books even from departments and throughout inside and outside the campus. Currently, our library has over 74,463 volumes in 42,049 titles. Our college subscribes to 252 National and International print periodicals and 8000 national & international online e-journals.
            </p>
            <h2 style={{ color: 'Blue' }}>Digital Library</h2>
            <hr />
            <center>
                <img src='https://skasc.ac.in/Images/lib1.gif' style={{ width: '500px', height: '400px' }} alt="Digital Library" />
            </center>
            <p>
                The separate Digital library is functioning in the central library. It is equipped with 66 multimedia systems and has a collection of more than 6560 CD-ROMS and 1671 DVDs on the latest and advanced topics in all areas of studies. We have an Intrasite which has all the Question papers, NPTEL Videos, web courses, MIT course ware, and Database like ASME, ASCE, EBSCO Lite, DELNET, NDL, and Swayam. We also have a membership with the British council library Chennai.
            </p>
            <h2 style={{ color: 'Blue' }}>Goals</h2>
            <p>
                Optimize the efficiency and effectiveness of library services to our users.<br />
                Develop and effectively utilize two-way communication to inform and gather input from our stakeholders.<br />
                Develop and retain highly skilled staff.<br />
                Improve the physical environment for users and staff.<br />
            </p>
            <h1 style={{ color: 'orange' }}>Unique Features</h1>
            <ul>
                <li>Air Conditioned Periodical section.</li>
                <li>Stone building Architecture.</li>
                <li>Built-in area of 1495.75sqm.</li>
                <li>Discussion Rooms.</li>
                <li>Wi-Fi Connectivity.</li>
                <li>Seating capacity for 250 students.</li>
                <li>Multimedia/Digital Library.</li>
            </ul>
            <hr />
            <h2 style={{ color: 'orange' }}>Guidelines</h2>
            <ul>
                <li>Every time you visit the library enter your name and time (In/Out) in the login register.</li>
                <li>Always come with your ID Card.</li>
                <li>Please keep silence when you are inside the Library.</li>
                <li>Only blank sheets are allowed inside the library (Notebooks & bags are not allowed).</li>
                <li>Personal book, jewelry, and costly items are not permitted.</li>
                <li>Do not make any mark with pen or pencil on books and periodicals; if you are found marking, you shall replace it with a new book.</li>
                <li>For the replacement of lost books, do not purchase second-hand books. Replace the book of the same edition or updated edition only.</li>
                <li>Don’t borrow books from other ID Card, if you do so your account will be blocked.</li>
                <li>Before entering the digital library login the register with system number.</li>
                <li>Keep your personal belonging at the entrance shelf.</li>
                <li>Avoid thronging (crowd) at the entrance.</li>
                <li>Don’t tear the newspaper separately. Don’t cut the newspaper and magazine. If found, the particular person’s account will be blocked.</li>
                <li>Avoid moving books and journals from one section to another section.</li>
                <li>Photocopies of books borrowed from the library can be taken in the library itself. For other materials use the reprographic section outside the library. While leaving the library switch off the fans & lights. While leaving the digital library shutdown the system and switch off fans.</li>
            </ul>
        </div>
    );
};

export default Library;
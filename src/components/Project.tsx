import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.jpeg';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/amrita1295/Instagram-Post-sharing-application" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" height="50%" /></a>
                <a href="https://github.com/amrita1295/Instagram-Post-sharing-application" target="_blank" rel="noreferrer"><h2>Post Sharing Application</h2></a>
                <p>Developed an Instagram clone with features like photo sharing, user authentication, and real-time messaging using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
            </div>
            <div className="project">
                <a href="https://book-store-amrita1295.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://github.com/amrita1295/BookStore" target="_blank" rel="noreferrer"><h2>BookStore</h2></a>
                <p>
                Developed a Bookstore application using React, featuring a user-friendly interface for browsing, searching, and managing books. Integrated APIs to dynamically fetch and display book details.
                Enhanced user experience with responsive design and state management using React hooks and context.</p>
            </div>
            <div className="project">
                <a href="https://to-do-app-five-steel.vercel.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://github.com/amrita1295/To-do-App" target="_blank" rel="noreferrer"><h2>Todo Application</h2></a>
                <p>Developed a To-Do Application using React, featuring a clean and intuitive interface for adding, editing, deleting, and marking tasks as complete. Implemented state management with React hooks and a responsive design for a smooth user experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/amrita1295/Meme_generator" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="102%" height="50%"/></a>
                <a href="https://github.com/amrita1295/Meme_generator" target="_blank" rel="noreferrer"><h2>Meme Generator</h2></a>
                <p>Developed a Meme Generator application using React, enabling users to create custom memes by adding text to images. Integrated dynamic state management with React hooks for real-time updates and ensured a responsive design for an engaging user experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/amrita1295/Drowsiness_system_opencv" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://github.com/amrita1295/Drowsiness_system_opencv" target="_blank" rel="noreferrer"><h2>Drowsiness detection with OpenCV</h2></a>
                <p>Developed a Drowsiness Detection System using OpenCV and Haar Cascades, designed to monitor facial landmarks and detect signs of fatigue or drowsiness in real-time. Implemented eye aspect ratio (EAR) analysis for accurate detection, enhancing safety and usability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/amrita1295/Code-Editor" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://github.com/amrita1295/Code-Editor" target="_blank" rel="noreferrer"><h2>Code-Editor</h2></a>
                <p>Developed a Code Editor application using React, featuring syntax highlighting, real-time code editing, and language support. 
                Integrated libraries like CodeMirror/Monaco Editor for an enhanced developer experience and implemented responsive design for seamless usage across devices.</p>
            </div>
            <div className="project">
                <a href="https://github.com/amrita1295/HoteL_Management" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://github.com/amrita1295/HoteL_Management" target="_blank" rel="noreferrer"><h2>Hotel Management System</h2></a>
                <p>
                Developed a Hotel Management System using Python, featuring functionalities like room booking, guest check-in/check-out, billing, and room availability tracking. </p>
            </div>
            <div className="project">
                <a href="https://www.rishi.fit/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href="https://www.rishi.fit/" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Developed a Portfolio Website for a client using React, featuring a modern, responsive design to showcase their work and professional details. Implemented smooth navigation, dynamic content rendering, and optimized performance to ensure a seamless user experience across devices.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
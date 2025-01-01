import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">EdgeVerve Systems Limited</h3>
            <h4 className="vertical-timeline-element-subtitle">Product Engineer</h4>
            <ul>
              <li>Automated Python-based data processing, ensuring faster pipeline execution.</li>
              <li>Designed a React-based file upload interface for seamless and user-friendly data handling.</li>
              <li>Collaborated with teams to resolve integration issues and ensure data accuracy.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - June 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ermin Automotive</h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Developer Intern</h4>
            <ul>
              <li>Developed a robust e-commerce platform with secure payment and billing integration.</li>
              <li>Implemented WhatsApp messaging for improved customer interaction and loyalty.</li>
              <li>Built a professional portfolio website to establish a distinctive brand presence.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2022 - Jan 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TrainingMug</h3>
            <h4 className="vertical-timeline-element-subtitle">Web Developer Intern</h4>
            <ul>
              <li>Customized themes and plugins to enhance website functionality and user experience.</li>
              <li>Created dynamic React dashboards with intuitive customization and real-time insights.</li>
              <li>Leveraged modern web development tools for efficient project delivery.</li>
            </ul>
              
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">The HouseMonk</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
            <ul>
              <li>Built an interactive dashboard using AngularJS for internal data visualization.</li>
              <li>Enhanced filtering systems for a more seamless and intuitive user experience.</li>
              <li>Deployed cloud-based applications with a focus on performance and reliability.</li>
            </ul>
  
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
import React from "react";
import mock03 from "../assets/images/mock03.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import rishi from "../assets/images/rishi.jpg"
import reddy from "../assets/images/reddy.jpg"
import madhu from "../assets/images/madhu.jpg"
import person from "../assets/images/person.jpg"
import xtra from "../assets/images/xtraliving.jpg"
import face from "../assets/images/facetimer.jpg"
import ermin from "../assets/images/ermin.jpg"
import jc from "../assets/images/jc.jpg"
import imad from "../assets/images/college.jpg"
import salon from "../assets/images/Salon.jpeg"
import laundry from "../assets/images/laundry.jpeg"
import vajra from "../assets/images/Vajra.jpg"
import deshank from "../assets/images/deshank.jpg"
import marketing from "../assets/images/marketing.jpeg"
import "../assets/styles/Project.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
    const projects = [
        {
            title: "Fitness Web Application",
            type: "Client",
            img: mock03,
            link: "https://www.rishi.fit/",
            github: "#",
            desc: "A modern fitness brand website focused on clarity, strength, and motion — crafted with bold design and smooth, responsive interactions.",
        },
        {
            title: "Fitness Web Application",
            type: "Client",
            img: xtra,
            link: "https://xtraliving.org/",
            github: "#",
            desc: "An advanced fitness and lifestyle platform featuring user login, personalized dashboards, and a seamless shopping experience for premium sports products.",
        },
        {
            title: "Face Timer",
            type: "Startup",
            img: face,
            link: "https://app.jcstaff.nl/",
            github: "#",
            desc: "A smart employee management system enabling staff to log work hours, track productivity, and seamlessly request manager approvals",
        },
        {
            title: "Ermin Automotive",
            type: "Startup",
            img: ermin,
            link: "https://erminautomotive.com/",
            github: "#",
            desc: "Built for Ermin Automotive: a sleek digital platform to showcase their electric mobility innovation, combining immersive design, modern UI and smooth mobile optimization.",
        },
        {
            title: "JC Staff (Neitherlands)",
            type: "Startup",
            img: jc,
            link: "https://jcstaff.nl/",
            github: "#",
            desc: "A modern corporate website for JC Staff, showcasing their staffing solutions with clear service sections, team profiles and mobile-optimized performance.",
        },
        {
            title: "College Website (Client from Saudi Arabia)",
            type: "Startup",
            img: imad,
            link: "https://imadinstitute.in/index.html",
            github: "#",
            desc: "A fully responsive educational website with an integrated student dashboard, allowing learners to access courses, track progress, and manage their study materials seamlessly.",
        },
        {
            title: "Vajra Fitness",
            type: "Startup",
            img: vajra,
            link: "https://vajrafitness.com/",
            github: "#",
            desc: "A dynamic fitness application offering personalized workout plans, membership management, and real-time tracking for a complete health experience.",
        },
        {
            title: "Salon App",
            type: "Client",
            img: salon,
            link: "#",
            github: "#",
            desc: "A sleek salon booking application with customer profiles, appointment scheduling, and stylist management for seamless service operations.",
        },
        {
            title: "Laundry App",
            type: "Client",
            img: laundry,
            link: "#",
            github: "#",
            desc: "A user-friendly laundry service app enabling pickup scheduling, order tracking, and payment integration with a clean and intuitive interface.",
        },
        {
            title: "BookStore",
            type: "Client",
            img: mock09,
            link: "https://book-store-amrita1295.vercel.app/",
            github: "#",
            desc: "An elegant online bookstore platform with user-friendly navigation, secure checkout, and personalized book recommendations for a seamless reading and shopping experience.",
        },
        {
            title: "Sadhana Tribe (Marketing)",
            type: "Client",
            img: marketing,
            link: "https://www.instagram.com/sadhana_tribe",
            github: "#",
            desc: "Successfully managed digital marketing for Sadhana Tribe, achieving over 5,000 organic Instagram followers within 1.5 months through strategic content and branding.",
        },



    ];

    const reviews = [
        {
            name: "Rishikesh Kumar",
            role: "Startup Founder",
            img: rishi,
            review:
                "Outstanding work! The website turned out sleek, responsive, and delivered ahead of schedule. Communication was seamless throughout.",
        },
        {
            name: "Rishikesh Kumar",
            role: "Startup Founder",
            img: rishi,
            review:
                "Creative, fast, and detail-oriented! Every project milestone was met with quality and innovation.",
        },
        {
            name: "Shashank Reddy",
            role: "Client",
            img: reddy,
            review:
                "Loved the experience! The UI animations and transitions were top-notch — exactly what I wanted for my brand.",
        },
        {
            name: "Madhu Samala",
            role: "Startup Founder",
            img: madhu,
            review:
                "Delivered high-quality results under tight deadlines — professional, efficient, and detail-oriented."
        },
        {
            name: "Azam Qureshi",
            role: "Client",
            img: person,
            review:
                "Delivered a large-scale educational platform within just a few months, impressive dedication.The project was completed on time, beautifully designed, and functional."
        },
        {
            name: "Deshank Dengre",
            role: "Startup Founder",
            img: deshank,
            review:
                "Delivered a large-scale educational platform within just a few months, impressive dedication.The project was completed on time, beautifully designed, and functional."
        },
        {
            name: "Avneet Kaur",
            role: "Startup Founder",
            img: person,
            review:
                "Delivered a large-scale educational platform within just a few months, impressive dedication.The project was completed on time, beautifully designed, and functional."
        }

    ];

    return (
        <section className="projects-container" id="projects">
            <h1 className="section-title">Projects & Collaborations</h1>
            <p className="section-subtitle">
                A selection of my most creative and impactful works — blending code,
                design, and experience.
            </p>

            {/* PROJECT CARDS */}

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card fade-up ${project.type === "Client" ? "client" : ""}`}
                    >
                        <div
                            className={`ribbon ${project.type === "Client" ? "client-ribbon" : ""}`}
                        >
                            {project.type}
                        </div>

                        <a href={project.link} target="_blank" rel="noreferrer">
                            <div className="project-image-wrapper">
                                <img src={project.img} alt={project.title} />
                            </div>
                        </a>

                        <div className="project-info">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <h2>{project.title}</h2>
                            </a>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* REVIEWS SECTION */}

            <div className="reviews-section" id="review">
                <h2 className="reviews-title">Client Reviews</h2>

                <Slider
                    dots={true}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={4000}
                    speed={600}
                    slidesToShow={2}
                    slidesToScroll={1}
                    pauseOnHover={true}
                    responsive={[
                        {
                            breakpoint: 1024, // tablet
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 768, // mobile
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: "0px",
                            },
                        },
                    ]}
                >
                    {reviews.map((r, i) => (
                        <div key={i} className="review-card fade-in">
                            <img src={r.img} alt={r.name} className="review-avatar" />
                            <h3>{r.name}</h3>
                            <p className="review-role">{r.role}</p>
                            <p className="review-text">“{r.review}”</p>
                        </div>
                    ))}
                </Slider>


            </div>


        </section>
    );
}

export default Project;

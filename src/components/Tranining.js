import React from "react";
import NavBar from "./Navbar";
import "../components/css/Training.css";
import BodyTop from "./BodyTop";
function Trainings() {
  return (
    <div className="trainings">
      <NavBar />
      <div className="trainings__body">
        <BodyTop
          heading="LIVE TRAININGS"
          desc="Get assured Internship experience. Numerous Freelancing opportunities & Daily live sessions. Global standard industrial exposure, Exclusive opportunity to involve in 30+ start-ups and much more!"
          button="Schedule a Free Counselling"
        />
      </div>
      <div className="mid__text">
        <p>
          <b>
            Are you ready to witness the most affordable and reliable learning
            Experience?
          </b>{" "}
          A one stop solution to Learn and Earn together, while getting real
          time global standard projects. TechHack Technologies is India’s First
          Cyber Security Training Firm to provide Absolute Live and practical
          environment to learn, earn and grow simultaneously. We have an
          objective to deliver 100% live and global standard experience to learn
          the core of Cyber security. We offer Live Training Courses from
          Beginner Level to Advance Level so you could learn Hassle free without
          changing the platform. It is our responsibility to train you regularly
          and provide assured Internship and Freelancing opportunities
          throughout the course. With each course, you will get tons and tons of
          benefits to empower your learning curve. We have the commitment to
          offer the most affordable and reliable trainings thus, please be
          assured that you won’t find any other platform offering such prices
          with such vast pool of opportunities.Our Mentors have over 3+ years of
          experience and trained more than 800+students so far!! Refer to the
          testimonials section to know more.
        </p>{" "}
      </div>

      <div className="trainings__bottom"></div>
      {/* <Footer /> */}
    </div>
  );
}

export default Trainings;

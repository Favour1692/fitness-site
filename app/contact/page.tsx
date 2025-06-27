import { FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
      <h1>contact us</h1>
      <div>
        <h2>contact form</h2>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="first name" autoComplete="true" />
            <input type="text" placeholder="last name" autoComplete="true" />
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="enter email address" autoComplete="true" />
          <label htmlFor="message">communicate your message</label>
          <textarea name="message" id="message" placeholder="enter message"></textarea>
        </form>
      </div>
      <div>
        <h2 className="flex gap-3">
          {" "}
          <FaClock /> <span>opening hours</span>
        </h2>
        <div>
          <ul>
            <li>Mondays - Fridays: 5:30 AM - 9:00 PM</li>
            <li>Saturdays: 7:00 AM - 9:00 PM</li>
            <li>Sunday: 12:00 PM - 6:00 PM</li>
          </ul>
          <p>Need help planning your visit? Drop by anytime during staffed hours, or shoot us a message for more info on peak times and class schedules.</p>
        </div>
      </div>
      <div>
        <h2>reach out to us</h2>
        <div>
          <p>Phone: </p>
          <p>email: </p>
        </div>
        <p>social links:</p>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaXTwitter />
        </div>
      </div>
    </section>
  );
};

export default Contact;

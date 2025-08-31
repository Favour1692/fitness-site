import { FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="pt-12">
      <h1>contact us</h1>
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2>contact form</h2>
        <form action="">
          <div className="space-y-4">
            <label htmlFor="name">Name</label>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="first name" autoComplete="true" className="p-4 border border-burnt text-crimson" />
              <input type="text" placeholder="last name" autoComplete="true" className="p-4 border border-burnt text-crimson" />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="enter email address" autoComplete="true" className="p-4 border border-burnt text-crimson" />
          <label htmlFor="message">communicate your message</label>
          <textarea name="message" id="message" placeholder="enter message" className="p-4 border border-burnt text-crimson"></textarea>
        </form>
      </div>
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="flex flex-col justify-center items-center">
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
      </div>

      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2>reach out to us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* text */}
          <div>
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

          {/* image */}
          <div>
            <Image src={"/contact.webp"} alt="working out in gym" width={500} height={250}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

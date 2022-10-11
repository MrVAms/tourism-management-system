import React from "react";

function Contact() {
  return (
    <div className="card">
      <form>
        <label for="fname">First Name</label>
        <input type="text" placeholder="Your name.."></input>
        <label for="lname">Last Name</label>
        <input type="text" placeholder="Your last name.."></input>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Contact;

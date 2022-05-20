import React from 'react'
import {useState} from 'react'



const Contact = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");


		function F1() {
		
		console.log(email, name,phone, message);
		// clearing the values
		setEmail("");
		setName("");
		setPhone("");
		setMessage("");
	  };
	  	function F2() {
		  alert('gửi thành công')


	};

	
   
  return (
    <div className="container-contact">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2>Contact Us</h2>
				<input type="text"  className="field" placeholder="Your Name"
				value={name}
				onChange={(e) => setName(e.target.value)}/>
				<input type="text" className="field" placeholder="Your Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}/>
				<input type="text" className="field" placeholder="Phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}/>
				<textarea placeholder="Message" className="field"
				value={message}
				onChange={(e) => setMessage(e.target.value)}></textarea>
				<button className="btn-contact" onClick={ () => {
					F1(); F2();
				}
				}>Send</button>
			</div>
		</div>
	</div>
  )
}

export default Contact;

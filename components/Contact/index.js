
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_r8cma2y",
            "template_pirgodf", form.current,
            "1EZkCNKwDqGUCFIjO")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };
    
    return ( 
        <section>
            <div>
                <form ref={form}
                onSubmit = {sendEmail}>
               
                <input type="text"
                placeholder="Full Name"
                name="user_name"
                    required />
                 <input type="email"
                placeholder="Email"
                name="user_email"
                    required />
                 <input type="text"
                placeholder="List"
                name="list"
                    required />
                <textarea name="message"
                    cols="30" rows="10"></textarea>
                <button type="submit">Send </button>
                
            </form>
            </div>
               </section>
)
}

export default Contact;
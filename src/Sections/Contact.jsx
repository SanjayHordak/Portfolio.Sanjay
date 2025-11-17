import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setisLoading] = useState(false)
    const [alert, setAlert] = useState(false);
    const [alertType, setAlertType] = useState("Success");
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 5000);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setisLoading(true);
       try {
         await emailjs.send(
            "service_kkpi0ol",
            "template_sjkhi8t",{
                from_name: formData.name,
                to_name: "Sanjaykumar. S",
                from_email: formData.email,
                to_email:"sanjays09082000@gmail.com",
                message: formData.message,
                
            }, "Wrfy2alKihpgpJ3B-");
            setisLoading(false);
            showAlertMessage("Success", "Thank you. I will get back to you as soon as possible.");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
       } catch (error) {
            setisLoading(false);
            console.log(error);
            showAlertMessage("Danger", "Ahh, something went wrong. Please try again.");
       }
        
    }
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {alert && <Alert type={alertType} text={alertMessage}/>}
        <div className="flex flex-col items-center justify-center
         max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
         <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Connect</h2>
            <p className="font-normal text-neutral-400">
                Whether you're looking to build a new website, improve
                 your existing platform, or bring a new idea to life, 
                 I'am here to help.
                 </p>
         </div>
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
               <label 
               htmlFor="name"
               className="field-label"
               >
                Full Name
               </label>
               <input 
               type="text" 
               id="name"
               name="name"
               className="field-input field-input-focus"
               placeholder="Your Full Name"
               autoComplete="name"
               value={formData.name}
               onChange={handleChange}
               required
               />
            </div>

            <div className="mb-5">
               <label 
               htmlFor="email"
               className="field-label"
               >
                Email
               </label>
               <input 
               type="email" 
               id="email"
               name="email"
               className="field-input field-input-focus"
               placeholder="your.email@gmail.com"
               autoComplete="email"
               value={formData.email}
                onChange={handleChange}
               required
               />
            </div>

            <div className="mb-5">
               <label 
               htmlFor="message"
               className="field-label"
               >
                Message
               </label>
               <textarea 
               id="message"
               rows="4"
               name="message"
               className="field-input field-input-focus"
               placeholder="Share your thoughts..."
               autoComplete="message"
               value={formData.message}
               onChange={handleChange}
               required
               />
            </div>
            <button 
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer
             bg-radial from-lavender to-royal hover-animation"
             >
               {isLoading ? "Sending..." : "Send"}
            </button>
         </form>
        </div>
        </section>
  )
}

export default Contact
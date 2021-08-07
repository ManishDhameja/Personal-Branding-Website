import React from 'react'
import './Email.css'
import { db } from '../Contact/Firebase';
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
  mirror: false,
  duration:800,
  offset:150
})


const Email = () => {
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setErrorMessage("Field is Empty!")
                setTimeout(() => {
                    setErrorMessage("");
                }, 7000);
        }
        else {
            if (!email.match(emailRegex)) {
                setErrorMessage("Enter a valid Email")
            }
            else {
                setErrorMessage(false);
                setSuccessMessage("Thanks, You'll be updated 😃")
                db.collection("Emails")
                    .add({
                        email: email
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
                setEmail(" ");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 7000);
            }
        }
    }
    return (
        <div className="emails">
            <div className="rows px-3 pt-5 pb-2">
                <div className="col pt-2 text-center">

                                {/* {Error message alert} */}
                                {errorMessage ? <Alert severity="error">{errorMessage
                                }</Alert> : ""}

                                {/* {Success Message Alert} */}
                                {successMessage ? <Alert severity="success">{successMessage}</Alert> : ""}
                    <span className="text-uppercase">Get Notified Of New Courses</span>

                    <div className="rows">
                        <div className="mx-auto">
                            <div id="mc_embed_signup">
                                <form onSubmit={handleSubmit}>

                                    <div className="input-group  mx-auto">
                                        <div className="input-containers">
                                            <input type="email" className="inputed" placeholder="Email" value={email} name="email" 
                                        onChange={(e) => setEmail(e.target.value)} />
                                            {/* <label for=""></label> */}
                                            {/* <span>Email</span> */}

                                        </div>
                                        <span className="input-group-btn">
                                            <input type="submit" value="Go!" name="subscribe" className="batton" />

                                        </span>
                                    </div>

                                </form>
                            </div>
                            <div className="textheads">
                                Your email will never be shared
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email

import React, { useState } from 'react'
import vg from '../assets/vg.png'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const Contact = () => {

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      }
    },
    transition: {
      delay: 0.9,
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [diasbleBtn, setDiasbleBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDiasbleBtn(true);
    try {
      await addDoc(collection(db, "Contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(Date.now()),
      })
      setName("")
      setEmail("")
      setMessage("")
      toast.success("Message Sent")
      setDiasbleBtn(false)
    } catch (error) {
      toast.error("Error")
      console.log(error)
    }
  }

  return (
    <div id='contact'>
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input type='text' placeholder='Enter your name' required value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder='Enter your message' required value={message} onChange={(e) => setMessage(e.target.value)} />

          <motion.button disabled={diasbleBtn} className={diasbleBtn ? "disableBtn" : ""} type='submit' {...animations.button}>Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Contact Me" />
      </aside>
    </div>
  )
}

export default Contact

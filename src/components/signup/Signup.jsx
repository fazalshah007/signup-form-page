import React from 'react'
import styles from './signup.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
        <h1>Sign up</h1>
        <p>Already have an account? <a href="#">login here</a></p>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" placeholder='enter your name here'/>
        <label htmlFor="email">Email</label>
        <input id='email' type="text" placeholder='enter your email here'/>
        <label htmlFor="password">Password</label>
        <input id='password' type="text" placeholder='enter your password here'/>
        <div>
        <input type="checkbox" name="" id="checked" />
        <label htmlFor="checked">By Signing up you agree to recive updates and special offers..</label>
        </div>
        </div>
        <div className={styles.left}>
        <img src="https://techssales.com/home/xit_load_files/images/login.webp" alt="" />
        </div>
        <button>submit</button>
    </div>
  )
}

export default Signup
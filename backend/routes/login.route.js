import express, { json } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.model.js'; 
import nodemailer from 'nodemailer'
const router = express.Router();


router.post('/signup', async (req, res) => {
    router.use(json())
    const { email, password,name } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        await sendVerificationEmail(email);
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ email, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '5d' });

        res.status(201).json({ message: 'User created', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Signin route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '5d' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
async function sendVerificationEmail(email) {
    
  
    try {
      const oneTimetoken = jwt.sign({ userId: 'your_user_id' }, 'secret', { expiresIn: '5m' }); // Replace with your user ID generation logic
        const verificationLink = `http://localhost:3000/auth/checklogin?token=${oneTimetoken}`;
  
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Adjust based on your SMTP server configuration
        auth: {
          user: 'your_email_address', // Replace with your actual email address
          pass: process.env.EMAIL_PASSWORD // Access email password securely using environment variables
        }
      });
        const mailOptions = {
        from: 'abhinavbhar2004@gmail.com', // Replace with your actual email address
        to: email,
        subject: 'Email Verification',
        text: '', // Include plain text for accessibility (optional)
        html: `
          <p>Click on the link below to verify your email address:</p>
          <a href="${verificationLink}">${verificationLink}</a>
        `
      };
  
      // Send the email using Nodemailer's sendMail method
      await transporter.sendMail(mailOptions);
  
      console.log('Email sent successfully!');
      return { message: 'Email sent successfully!' }; // Return a success message
  
    } catch (error) {
      console.error('Error sending email:', error.message);
      return { message: 'Failed to send email.', error: error.message }; // Return an error message
    }
  }
  router.get('/checklogin', async (req, res) => {
    const token = req.query.token;

    try {
        const decoded = jwt.verify(token, 'secret');
        const user = await User.findOne({ _id: decoded.userId });
        if (!user) {
            throw new Error('User not found');
        }
        await user.updateOne({verified:true})
        const newToken = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '5d' });

        res.json({ success: true, token: newToken });
    } catch (error) {
        console.error('Token verification failed:', error.message);
        res.status(401).json({ success: false, message: 'Token verification failed' });
    }})
export default router;

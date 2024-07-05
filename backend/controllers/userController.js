import userModel from "../models/userModel.js"; // Ensure correct relative path and file extension
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

<<<<<<< HEAD

=======
// Create a JWT token
>>>>>>> b4cb1d0ad1d50eec4cc1a40ae56b568b39de446b
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
<<<<<<< HEAD
    
=======
>>>>>>> b4cb1d0ad1d50eec4cc1a40ae56b568b39de446b
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

<<<<<<< HEAD
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    
=======
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

>>>>>>> b4cb1d0ad1d50eec4cc1a40ae56b568b39de446b
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
}


const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

<<<<<<< HEAD
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
=======
    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

>>>>>>> b4cb1d0ad1d50eec4cc1a40ae56b568b39de446b
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
}

export { loginUser, registerUser };

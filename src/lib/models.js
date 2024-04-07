import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 25,
  },
  img: {
    type: String,
  },
});

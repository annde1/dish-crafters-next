import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
const register = async (previousState, formData) => {
  const { email, userName, password, img } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const user = await User.findOne({ userName });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      img,
    });
  } catch (err) {
    console.log(err);
  }
};

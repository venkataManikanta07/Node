const { createHmac, randomBytes } = require("node:crypto"); // This is a built-in module in Node.js for creating cryptographic hashes

const { Schema, model } = require("mongoose");
const { error } = require("node:console");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/images/profileImage.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true },
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString("hex"); // Generate a random salt for each user
  /**
   * we create salt for every user
   * then we create a hash of the password using the salt and store both the salt and the hashed password in the database.
   * This way, even if two users have the same password, their stored password hashes will be different due to the unique salts.
   * When a user tries to log in, we retrieve the salt from the database, hash the provided password with that salt, and compare it to the stored hashed password. This approach significantly enhances security by protecting against rainbow table attacks and ensuring that identical passwords do not result in identical hashes.
   */

  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
});

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found");

  const salt = user.salt;
  const hashedPassword = user.password; // This is the hashed password stored in the database

  const providedHashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (providedHashedPassword === hashedPassword) {
    throw new error("Invalid password");
  }
  return { ...user, password: undefined, salt: undefined }; // Return the user object without the password field
});
const User = model("User", userSchema);
module.exports = User;

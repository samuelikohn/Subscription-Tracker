import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "User name is required"],
			trim: true,
			minLength: 2,
			maxLength: 50
		},
		email: {
			type: String,
			required: [true, "User email required"],
			unique: true,
			trim: true,
			lowercase: true,
			minLength: 5,
			maxLength: 255,
			match: [/\S+@\S+\.\S+/, "please fill out a valid address"]
		},
		password: {
			type: String,
			required: [true, "User password required"],
			minLength: 6
		}
	},
	{ timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User

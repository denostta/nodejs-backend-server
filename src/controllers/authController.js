import {prisma} from '../config/db.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/generateToken.js'

// ***********************************
//login controller
const  register = async (req, res) => {
    const {name, email, password} = req.body
    //check if the user exist
    const userExist = await prisma.user.findUnique(
        {where: {email: email}}
    )

    console.log(`USER: ${userExist}`);
    

    // response if user already exist in database
    if (userExist){
        res.status(400).json({error: "email already exist"})
    }

    //hashpasssword
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)

   

     //create new user
     const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
     })
      // generate JWT token
    const token = generateToken(user.id, res)
     // response after successful creation of user
     res.status(201).json({
        status: "success",
        data: {
            user: {
                id: user.id,
                name: name,
                email: email
            },
            token,
        }
     })
}

// ***********************************
// login controller
const login = async (req, res) => {
    const {email, password} =  req.body
    // check if the user exist in database
    const user = await prisma.user.findUnique(
        {
            where: {
                email: email
            }
        }
    )
    // response if invalid email
    if (!user) {
        res.status(400).json({error: "Invalid email or password"})
    }

    // verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        res.status(401).json({error: "Invalid Email or password"})
    }

    // generate JWT token
    const token = generateToken(user.id, res)

    // response for successful login
    res.status(201).json({
        status: "success",
        data: {
            user: {
                id: user.id,
                email: email
            },
            token,
        }
     })

}

// ***********************************
// logout controller
const logout = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({
        status: "success",
        message: "Logged out successfully"
    })
}

export {register, login, logout}
import User from "../model/User.js";

export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ googleId: req.body.googleId });

        if (exist) {
            res.status(200).json('user already exists');
            return;
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json("user saved");

        console.log(req.body);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users.data);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
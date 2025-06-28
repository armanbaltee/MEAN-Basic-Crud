const User = require('../model/user.model');

const viewData = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        console.log("View Error:", error);
        res.status(500).send("Error retrieving users.");
    }
};

const insertdata = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const newUser = await User.create(req.body);
        res.status(200).send("Data submitted successfully!");
    } catch (error) {
        console.log("Insert Error:", error);
        res.status(500).send("Server error while inserting user.");
    }
};

const updatedata = async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found!");
        }

        await User.updateOne({ email }, { $set: req.body });
        res.status(200).send("User updated successfully!");
    } catch (error) {
        console.log("Update Error:", error);
        res.status(500).send("Server error while updating user.");
    }
};

const deletedata = async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found!");
        }

        await User.deleteOne({ email });
        res.status(200).send("User deleted successfully!");
    } catch (error) {
        console.log("Delete Error:", error);
        res.status(500).send("Server error while deleting user.");
    }
};

module.exports = {
    viewData,
    insertdata,
    updatedata,
    deletedata
};

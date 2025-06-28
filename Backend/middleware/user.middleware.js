const insertdata = (req, res, next)=>{
    const {firstname, lastname,email, phone, age, password} = req.body
    if(!firstname || !lastname || !email || !phone || !age || !password){
        res.status(400).send("Require all field!!!")
    }
        next()
}

const updatedata = (req, res, next)=>{
    const email = req.params.email;
    if(!email){
        return res.status(400).send("Insert Email")
    }
    next()
}

const deletedata = (req, res, next)=>{
    const email = req.params.email;
    if(!email){
        return res.status(400).send("Insert Email")
    }
    next()
}

module.exports = {
    insertdata,
    updatedata,
    deletedata
}
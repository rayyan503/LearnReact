const {user, profiles} = require('../../models')
const joi = require('joi')

exports.register = async (req, res) => {
    const schema = joi.object({
        name : joi.string().min(5).required(),
        email : joi.string().min(5).required(),
        password : joi.string().min(5).required(),

    })

    const { error } = schema.validate(req.body)

    if(error){
        return res.status(400).send({
            error:{
                message:error.details[0].message
            }
        })
    }

    try {
        const santri = await user.findOne({
            where:{
                email: req.body.email
            }

        })

        if(santri){
            return res.status(400).send({

                status: "failed",
                message:"email santri udh ada"
            })

        }

        const newSantri = await user.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })

        let santris = {
            name:newSantri.name,
            email:newSantri.email
        }

        res.status(200).send({
            status:'success',
            data:{santris}
        })
    
    } catch (error) {
        res.status(400).send({
            status:"failed",
            message:"error"
        })
    }

}

exports.getUsers = async (req, res) => {
    try {
        const users = await user.findAll()
    
        res.send({
            status : "succes",
            data: {
                users
            }
        })
    }catch (error) {
        console.log(error);
    }
}
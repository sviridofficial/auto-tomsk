const { Router } = require("express");
const nodemailer = require("nodemailer");
const config = require("config");
const router = Router();


//send email
router.post("/send", async (request, response)=>{
        try{
            const {name, email, description} = request.body;

            const textOfApplication = "Заявка от: " + name.toString() + ". " + "email: " +
                email.toString() + "\n" + description.toString();

            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth: {
                    user: config.get("email"),
                    pass: config.get("password")
                }
            })

            const mailOptions = {
                from: "dmitry.auto.site@gmail.com",
                to: "dmitry.auto.site@gmail.com",
                subject: "Заявка с сайта TOPKOM.RU",
                text: textOfApplication
            }

            await transporter.sendMail(mailOptions, (err) => {
                console.log(err.message);
            })

        }catch (e){
            console.log(e.message);
        }
});

module.exports = router;

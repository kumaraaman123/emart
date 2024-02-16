const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


app.get("/", (req, res) => {
    res.send("Hellow world")
});
app.post("/pay", async (req, res) => {
    try {
        const stripeCharge = await Stripe.charges.create({
            source: req.body.token.id,
            amount: req.body.amount,
            currency: "usd",
        });
        res.status(200).json({ message: "Payment successful", charge: stripeCharge });
    } catch (error) {
        console.error("Error processing payment:", error.message);
        res.status(500).json({ error: "Payment failed" });
    }
});


app.listen(port, () => {
    console.log('server is running on port 8000  ${ port }')
})
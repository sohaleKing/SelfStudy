const webhookSubscriber = require("../assets/state").webhookSubscriber

const router = require("express").Router()
module.exports = router

router.post("/subscription", webhookSubscription)
router.delete("/subscription", webhookUnSubscription)

function webhookSubscription(req, res) {
    const { url, token } = req.body
    //token bouncer
    if (token !== process.env.TOKEN) {
        res.status(401).end()
        return
    }
    webhookSubscriber.push(url)
    res.send(webhookSubscriber)
}

function webhookUnSubscription(req, res) {
    const url = req.query.url
    subscriptions = subscriptions.filter((el) => el !== url)
    res.send("unsubscribed")
    setInterval(() => {
        subscriptions.forEach((url) => axios.post(url), 5000)
    })
}

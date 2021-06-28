function alertWebhook(req, res, settings, triggerControllers) {
    try {
        const body = req.body;
        const alertId = body.alertId || body.id;
        triggerControllers.forEach(trigger => {
            const id = trigger.params.ALERT_ID;
            if (id && id != alertId) return;
            trigger.execute(body.title, body);
        });
        res.status(200).send("OK");
    }
    catch (err){
        res.status(422).send(err.message);
    }
}

module.exports = {
    ALERT_WEBHOOK: alertWebhook
}

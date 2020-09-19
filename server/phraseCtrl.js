module.exports = {
    getLastPhrase: async (req, res) => {
        const db = req.app.get('db');

        await db.phrase.get_last_phrase()
            .then(response => res.status(202).send(response))
            .catch(err => res.status(400).send(err));
    },
    addNewPhrase: async (req, res) => {
        const db = req.app.get('db');
        const { english, gorbyoyo } = req.body;

        await db.phrase.add_new_phrase([english, gorbyoyo])
            .then(() => res.sendStatus(202))
            .catch(err => res.status(400).send(err));
    }
}
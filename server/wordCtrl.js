const { response } = require("express");

module.exports = {
    getLastWord: async (req, res) => {
        const db = req.app.get('db');

        await db.word.get_last_word()
            .then(response => res.status(202).send(response))
            .catch(err => res.status(400).send(err));
    },
    addNewWord: async (req, res) => {
        const db = req.app.get('db');
        const { word_text } = req.body;

        await db.word.add_new_word([word_text])
            .then(() => res.sendStatus(202))
            .catch(err => res.status(400).send(err));
    }
}
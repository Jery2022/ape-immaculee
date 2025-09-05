import express, { json } from 'express';
import { appendFile } from 'fs';
const app = express();
const port = 3000;

app.use(json());

app.post('/enregistrer_don', (req, res) => {
    const { donorName, donorEmail, donationAmount } = req.body;
    const data = `Nom: ${donorName}, Téléphone: ${donorEmail}, Montant: ${donationAmount}\n`;

    appendFile('datas/donations.txt', data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de l\'enregistrement des données.');
        }
        res.status(200).send('Données enregistrées avec succès.');
    });
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

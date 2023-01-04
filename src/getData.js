import {
    GoogleSpreadsheet
  } from 'google-spreadsheet';


// const { GoogleSpreadsheet } = require('google-spreadsheet');

/* const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

export default async function handler(req, res) {
  const {
    query: { id }
  } = req;

  try {
    if (!id) {
      throw new Error();
    }

    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
    });

    res.status(200).json({ message: 'A ok!' });
  } catch (error) {
    res.status(500).json(error);
  }
} */
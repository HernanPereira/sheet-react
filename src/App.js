import React from 'react';

import useGoogleSheets from 'use-google-sheets';
const App = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEET_ID,
    // sheetsOptions: [{ id: 'Sheet1' }],
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;

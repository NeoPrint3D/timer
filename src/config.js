const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOM ,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PRJ_ID,
    storageBucket:process.env.REACT_APP_STG_BKT ,
    messagingSenderId: process.env.REACT_APP_MSG_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESG_ID
  };
  export default firebaseConfig;
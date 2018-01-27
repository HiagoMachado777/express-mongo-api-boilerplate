import configExpress from './config/express';
import database from './config/database';

const startApplication = () => {
  const app = configExpress();
  app.listen(3000, () => console.log('API running on port 3000'));
};

const tryConnect = () => database.connect();

export default tryConnect()
  .then(startApplication())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


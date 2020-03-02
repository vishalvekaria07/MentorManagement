import mongoose from 'mongoose';
import retry from 'async-retry';
import config from '../../config';

export default async function connect(url) {
  console.log('Connecting to DB...');
  retry(async () => {
    mongoose.set('useUnifiedTopology', true);
    await mongoose.connect(url || config.connection.id, {
      useNewUrlParser: true,
      dbName: 'local'
    });
    console.log('Connected to DB');
  });
}


export async function disconnect() {
  return mongoose.connection.close();
}

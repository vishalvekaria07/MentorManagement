import MemoryServer from 'mongodb-memory-server';
import fs from 'fs-extra';

const { MongoMemoryServer } = MemoryServer;
let mongod;

async function main() {
  await fs.ensureDir('./storage');
  mongod = new MongoMemoryServer({
    instance: {
      port: 45000,
      dbName: 'local',
      storageEngine: 'wiredTiger',
      dbPath: './storage'
    }
  });

  const uri = await mongod.getConnectionString();
  console.log('MongoDB running at %s', uri);
}

process.on('SIGINT', async () => {
  await mongod.stop();
  process.exit(0);
});

main()
  .catch(console.error);

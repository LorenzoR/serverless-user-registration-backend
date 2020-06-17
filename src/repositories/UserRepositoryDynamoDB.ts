import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB from 'aws-sdk/clients/dynamodb';

import { UserRepositoryInterface } from './UserRepositoryInterface';

import User from '../models/User';

class UserRepositoryDynamoDB implements UserRepositoryInterface {
  private mapper: DataMapper;

  constructor(stage: string) {
    console.log('Stage', stage);
    let dynamoDB;

    if (stage === 'local') {
      dynamoDB = new DynamoDB({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET', // needed if you don't have aws credentials at all in env
      });
    } else {
      dynamoDB = new DynamoDB({
        region: 'ap-southeast-2',
      });
    }

    this.mapper = new DataMapper({
      client: dynamoDB,
      tableNamePrefix: `${stage}-`, // Table prefix to keep dev and prod tables separate
    });
  }

  // Get user by email
  public async getByEmail(email: string): Promise<User> {
    try {
      const response = await this.mapper.get(Object.assign(new User(), { Email: email }));

      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Put user
  public async put(user: User): Promise<boolean> {
    const toSave = Object.assign(new User(), user);

    try {
      await this.mapper.put(toSave);

      return true;
    } catch (error) {
      console.error('ERROR', error);
      return false;
    }
  }
}

export default UserRepositoryDynamoDB;

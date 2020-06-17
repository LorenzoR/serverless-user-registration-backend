import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import User from '../models/User';

import UserService from '../service/UserService';
import UserRepositoryDynamoDB from '../repositories/UserRepositoryDynamoDB';

const userRepositoryDynamoDB = new UserRepositoryDynamoDB(process.env.STAGE || 'local');
const userService = new UserService(userRepositoryDynamoDB);

export const registration: APIGatewayProxyHandler = async (event) => {
  // Get POST parameters
  const { body } = event;
  const parsedBody = JSON.parse(body);

  // Create user from parameters
  const newUser = Object.assign(new User(), {
    Email: parsedBody.user.email,
    Name: parsedBody.user.name,
    password: parsedBody.user.password,
  });

  // Insert user
  try {
    const response = await userService.register(newUser);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify('ERROR'),
    };
  }
};

import {
  attribute,
  hashKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';

@table('users')
class User {
  @hashKey({
    type: 'String',
  })
  public Email?: string;

  @attribute()
  public Name?: string;

  @attribute()
  public password?: string;
}

export default User;

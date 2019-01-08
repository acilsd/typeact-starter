import { action, observable } from 'mobx';

export interface ITestStore {
  firstName: string;
  secondName: string;
  email: string;
  occupation: string;
  city: string;
  bio: string;
  handleCHange(
    endpoint: 'firstName' |
      'secondName' |
      'email' |
      'occupation' |
      'city' |
      'bio',
    data: string): void;
}

class TestStore implements ITestStore {
  @observable firstName: string = '';
  @observable secondName: string = '';
  @observable email: string = '';
  @observable occupation: string = '';
  @observable city: string = '';
  @observable bio: string = '';

  @action.bound
  handleCHange(
    endpoint: 'firstName' |
      'secondName' |
      'email' |
      'occupation' |
      'city' |
      'bio',
    data: string) {
    this[endpoint] = data;
  }
}

export default new TestStore();

import { action, observable } from 'mobx';

export interface ITestStore {
  firstName: string;
  secondName: string;
  email: string;
  occupation: string;
  city: string;
  bio: string;
  handleCHange(endpoint: string, data: string): void;
  getValues(): any[];
}

class TestStore implements ITestStore {
  @observable firstName: string = '';
  @observable secondName: string = '';
  @observable email: string = '';
  @observable occupation: string = '';
  @observable city: string = '';
  @observable bio: string = '';

  @action.bound
  handleCHange(endpoint: string, data: string) {
    this[endpoint] = data;
  }

  @action.bound
  getValues() {
    return [
      { value: this.firstName, label: 'First name' },
      { value: this.secondName, label: 'Second name' },
      { value: this.email, label: 'email' },
      { value: this.occupation, label: 'occupation' },
      { value: this.city, label: 'city' },
      { value: this.bio, label: 'bio' },
    ];
  }
}

export default new TestStore();

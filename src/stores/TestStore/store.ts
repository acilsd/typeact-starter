import { action, computed, IComputedValue, observable } from 'mobx';

interface IFields {
  name: string;
  surname: string;
}

export interface ITestStore {
  fields: IFields;
  // getFullname: IComputedValue<string>;
  setField(value: string, field: string): void;
}

class TestStore implements ITestStore {
  @observable fields = {
    name: '',
    surname: '',
  };

  @action setField(value: string, field: string) {
    this.fields[field] = value;
  }
}

export const testStore = new TestStore();

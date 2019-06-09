import { action, computed, IComputedValue, observable } from 'mobx';

interface IFields {
  name: string; surname: string;
}

export interface ITestStore {
  fields: IFields;
  // getFullname: IComputedValue<string>;
  setField(value: string, field: string): void;
}

export const createStore = (): ITestStore => {
  const store: ITestStore = {
    fields: observable({
      name: '',
      surname: '',
    }),
    setField: action((value: string, field: string) => {
      store.fields[field] = value;
    }),
    // getFullname: computed(() => `${store.fields.name} ${store.fields.surname}`),
  };

  return store;
};

import React from 'react';
import { Record } from 'immutable';

type ContextData = {
  test: string;
};

type Actions = {
  type: string;
};

type State = Record<ContextData>;

interface Context {
  data: Record<ContextData>;
  dispatch: React.Dispatch<Actions>;
}

const RecordGenerator = Record<ContextData>({
  test: 'test',
});

export const MainContext = React.createContext<Context>({
  data: RecordGenerator(),
  dispatch: () => ({}),
});

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export const MainContextProvider: React.FC = ({ children }) => {
  const [data, dispatch] = React.useReducer(reducer, RecordGenerator());
  return (
    <MainContext.Provider value={{ data, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

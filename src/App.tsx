import React from 'react';
import {BriefForm} from "./Brief/BriefForm";
import store from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <>
        <Provider store={store}>
            <BriefForm />
        </Provider>
    </>
  );
}

export default App;

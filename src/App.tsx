import React from 'react';
import {BriefForm} from "./Brief/BriefForm";
import store from "./store";
import {Provider} from "react-redux";
import {ListBrief} from "./Brief/ListBrief";

function App() {
  return (
    <>
        <Provider store={store}>
            <BriefForm />
            <ListBrief />
        </Provider>
    </>
  );
}

export default App;

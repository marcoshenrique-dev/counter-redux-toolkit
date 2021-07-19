import Text from "./components/Text";
import Buttons from "./components/Buttons";

import {Provider} from "react-redux";

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Text />
      <Buttons/>
    </div>
    </Provider>
  );
}

export default App;

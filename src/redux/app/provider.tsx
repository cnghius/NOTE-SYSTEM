import { Provider } from "react-redux";
import { store, persistsStore } from "../store";
import App from "../../App";
import { PersistGate } from "redux-persist/integration/react";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistsStore}>
        <App />
      </PersistGate>
    </Provider>
  );
};
export default AppProvider;

import { MainLayout } from "./layouts/main-layout";
import ReactModule from "./tutorial/modules/react-module";
import ReactComponent from "./tutorial/react-components";

function App() {
  return (
    <MainLayout>
    <ReactModule/>
    <hr/>
    <ReactComponent/>  
    </MainLayout>
  );
}

export default App;

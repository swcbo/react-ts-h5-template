import { BrowserRouter as Router } from 'react-router-dom';
import TabBarView from './layout/TabBarView';
import RouteRender from './routers/RouteRender';
const App = () => {
  return (
    <>
      <Router>
        <RouteRender />
        <TabBarView />
      </Router>
    </>
  );
};
export default App;

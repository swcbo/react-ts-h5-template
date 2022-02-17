import { unstable_HistoryRouter as Router } from 'react-router-dom';
import TabBarView from '@/layout/TabBarView';
import RouteRender from '@/routers/RouteRender';
import history from '@/utils/history';
const App = () => {
  return (
    <>
      <Router history={history}>
        <RouteRender />
        <TabBarView />
      </Router>
    </>
  );
};
export default App;

import { useRoutes } from 'raviger'
import { useEffect, useRef, useState } from 'react';

import App from './App.jsx'
import EditTask from './EditTask'
const routes = {
    '/': () => <App />,
    // envois de paramètres
    '/:taskId/edit': ({ taskId }) => <EditTask taskId={taskId} />,
  }

function Router() {

    let route = useRoutes(routes)
    return  <>{route}</>
}
export default Router
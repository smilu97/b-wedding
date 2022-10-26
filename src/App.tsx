import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

import { globalStyles } from './stitches';
import Home from './containers/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default function App() {
  globalStyles();
  return <RouterProvider router={router} />;
}

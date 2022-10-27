import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

import { globalStyles } from './stitches';
import { Home, TabNav, Gallery, GuestBook, Details } from './containers';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TabNav />}>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/guestbook" element={<GuestBook />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default function App() {
  globalStyles();
  return <RouterProvider router={router} />;
}

import {
  createHashRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { globalStyles } from './stitches';
import {
  Home,
  TabNav,
  Gallery,
  GuestBook,
  Details,
  Transfer,
  Writing,
} from './containers';
import Modal from './components/Modal';
import DeleteComment from './containers/DeleteComment';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<TabNav />}>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Outlet />
          </>
        }
      >
        <Route
          path="transfer/:accountKey"
          element={
            <Modal modalTitle="마음 전달하기">
              <Transfer />
            </Modal>
          }
        />
      </Route>
      <Route path="gallery" element={<Gallery />} />
      <Route
        path="guestbook"
        element={
          <>
            <GuestBook />
            <Outlet />
          </>
        }
      >
        <Route
          path="delete/:id"
          element={
            <Modal modalTitle="방명록 삭제">
              <DeleteComment />
            </Modal>
          }
        />
      </Route>
      <Route path="guestbook/writing" element={<Writing />} />
      <Route path="details" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default function App() {
  globalStyles();
  return <RouterProvider router={router} />;
}

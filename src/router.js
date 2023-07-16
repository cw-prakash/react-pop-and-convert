import { createBrowserRouter, createHashRouter } from "react-router-dom";
import {
  CreateNotification,
  EditNotification,
  Notifications,
  Welcome,
} from "./Pages";
import { Layout } from "./ui";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/notifications/create", element: <CreateNotification /> },
      { path: "/notifications/:id", element: <EditNotification /> },
    ],
  },
];

const browserRouter = createBrowserRouter(routes);

const hashRouter = createHashRouter(routes);

export { browserRouter as default, hashRouter };

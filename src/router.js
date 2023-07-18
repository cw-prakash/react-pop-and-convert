import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import {
  CreateNotification,
  EditNotification,
  Notifications,
  Welcome,
  createAction,
  editLoader,
  editAction,
  notificationsLoader
} from "./Pages";
import { Layout } from "./ui";

const queryClient = new QueryClient();

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/notifications", element: <Notifications />, loader: notificationsLoader(queryClient) },
      {
        path: "/notifications/create",
        element: <CreateNotification />,
        action: createAction(queryClient),
      },
      {
        path: "/notifications/:id/edit",
        element: <EditNotification />,
        loader: editLoader(queryClient),
        action: editAction(queryClient)
      },
    ],
  },
];

const browserRouter = createBrowserRouter(routes);

const hashRouter = createHashRouter(routes);

export { browserRouter as default, hashRouter, queryClient };

import { redirect } from "react-router-dom";

import { createNotification, getNotification, updateNotification } from "../../store";
export { default as Notifications, loader as notificationsLoader } from "./ListNotifications";
export { default as EditNotification, loader as editLoader, action as editAction } from "./EditNotification";
export {default as CreateNotification, action as createAction} from "./Notification";

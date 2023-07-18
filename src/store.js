import localforage from "localforage";
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";

let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

export async function getNotifications(query) {
  await fakeNetwork(`getNotifications:notifications`);
  let notifications = await localforage.getItem("notifications"); //
  if (!notifications) notifications = [];
  if (query) {
    notifications = matchSorter(notifications, query, { keys: ["title", "description"] });
  }
  return notifications.sort(sortBy("id", "createdAt"));
}

export async function getNotification(id) {
  await fakeNetwork(`notification:${id}`);
  let notifications = await localforage.getItem("notifications");
  let notification = notifications?.find(({ id: _id }) => _id === id);
  return notification ?? null;
}

export async function createNotification(data) {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);

  let notification = {
    id,
    createdAt: Date.now(),
    ...data,
  };
  let notifications = await getNotifications();
  notifications.unshift(notification);
  await set(notifications);
  return notification;
}

export async function updateNotification(id, updates) {
  await fakeNetwork();
  let notifications = await localforage.getItem("notifications");
  let notification = notifications.find(({ id: _id }) => _id === id);
  if (!notification) throw new Error("No Notification found for", id);
  Object.assign(notification, updates);
  await set(notifications);
  return notification;
}

export async function deleteNotification(id) {
  let notifications = await localforage.getItem("notifications");
  let index = notifications.findIndex(({ id: _id }) => _id === id);
  if (index > -1) {
    notifications.splice(index, 1);
    await set(notifications);
    return true;
  }
  return false;
}

function set(notifications) {
  return localforage.setItem("notifications", notifications);
}

import Icon from "../../../components/Icon";
import NotificationsTable from "./NotificationsTable";
import { useEffect, useState } from "react";

import { getNotifications } from "../../../store";
import { Link } from "react-router-dom";

const _notifications = import("./notifications.json");

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    getNotifications().then((res) => setNotifications(res));
  }, []);

  const items = notifications.filter(({ title }) => {
    return title.toLowerCase().match(query.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-6 p-6 pt-8">
      <div class="flex justify-between">
        <h3 className="font-semibold text-2xl">All Notifications</h3>
        <div className="flex gap-4">
          <div className="relative">
            <span className="absolute h-full w-11 flex justify-center items-center">
              <Icon icon="search" />
            </span>
            <input
              className="py-3 pl-11 pr-4 border border-gray-100 shadow"
              style={{ width: "320px" }}
              type="text"
              placeholder="What are you looking for ..."
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>
          <Link
            to="/notifications/create"
            className="px-6 py-3 bg-blue-500 rounded text-white"
          >
            Add Notification
          </Link>
        </div>
      </div>
      <NotificationsTable items={items} onItemChange={setNotifications} />
    </div>
  );
}

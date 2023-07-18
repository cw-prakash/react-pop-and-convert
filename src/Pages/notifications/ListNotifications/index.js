import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, Form, useParams, useLoaderData } from "react-router-dom";

import Icon from "../../../components/Icon";
import NotificationsTable from "./NotificationsTable";
import { getNotifications } from "../../../store";

const notificationsListQuery = (q) => ({
  queryKey: ["notifications", "list", q ?? 'all'],
  queryFn: () => getNotifications(q),
})

export function loader(queryClient) {
  return async function ({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    if (!queryClient.getQueryData(notificationsListQuery(q).queryKey)) {
      await queryClient.fetchQuery(notificationsListQuery(q))
    }

    return { q };
  }
}

export default function Notifications() {

  const { q } = useLoaderData();

  const { data : items, loading } = useQuery(notificationsListQuery(q))

  return (
    <div className="flex flex-col gap-6 p-6 pt-8">
      <div className="flex justify-between">
        <h3 className="font-semibold text-2xl">All Notifications</h3>
        <div className="flex gap-4">
          <div className="relative">
            <span className="absolute h-full w-11 flex justify-center items-center">
              <Icon icon="search" />
            </span>
            <Form role="search">
              <input
                className="py-3 pl-11 pr-4 border border-gray-100 shadow"
                style={{ width: "320px" }}
                type="search"
                name="q"
                placeholder="What are you looking for ..."
                defaultValue={q}
              />
            </Form>
          </div>
          <Link to="/notifications/create" className="px-6 py-3 bg-blue-500 rounded text-white">
            Add Notification
          </Link>
        </div>
      </div>
      <NotificationsTable items={items} />
    </div>
  );
}

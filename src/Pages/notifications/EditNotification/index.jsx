import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getNotification, updateNotification } from "../../../store";
import NotificationForm from "../NotificationForm";

const notificationDetailQuery = id => ({
    queryKey: ['notifications', 'list', id],
    queryFn: async () => {
        const notification = await getNotification(id)
        return notification
    }
})

export const loader = queryClient => async ({ params }) => {
    const query = notificationDetailQuery(params.id)
    return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
    )
}

export const action = (queryClient) => async ({ request, params }) => {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    const notification = await updateNotification(params.id, updates)
    queryClient.invalidateQueries({ queryKey: ['notifications'] })
    return notification
}

export default function EditNotification() {

    const { id } = useParams()

    const { data: notification } = useQuery(notificationDetailQuery(id))

    return <NotificationForm notification={notification} />;
}

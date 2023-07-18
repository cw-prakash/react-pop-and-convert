import { redirect } from "react-router-dom";

import { createNotification } from "../../store";
import NotificationForm from "./NotificationForm";

export const action = (queryClient) => async ({ request, params }) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  const notification = await createNotification(updates)
  queryClient.invalidateQueries({ queryKey: ['notifications'] })
  return redirect(`/notifications/${notification.id}/edit`)
}

export default function CreateNotification() {

  const data = {
    title: '',
    status: 'active',
    stats: 0,
    type: 'sticky'
  }

  return <NotificationForm notification={data} />;
}

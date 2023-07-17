import { Form, Link } from "react-router-dom";

import { Icon } from "../../components";
import { createNotification } from "../../store";

export async function action(req) {
  const notification = await createNotification();

  console.debug({ notification, req });
  return { notification };
}

export default function CreateNotification() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto p-6">
      <Form method="post">
        <div className="flex justify-between align-center">
          <button className="flex">
            <Icon icon="double-arrow-left" /> Back
          </button>
          <div className="flex gap-4">
            <button
              className="px-6 border-blue-500 border py-3 rounded text-blue-500"
              type="submit"
            >
              Save as Draft
            </button>
            <button
              className="px-6 py-3 bg-blue-500 rounded text-white"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
        <input
          type="text"
          className="shadow-md w-full border rounded py-2.5 px-3.5"
          placeholder="Notification Title"
        />
      </Form>
    </div>
  );
}

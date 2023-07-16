import { Link } from "react-router-dom";
export default function CreateNotification() {
  return (
    <div>
      <button>Back</button>
      <div>
        <Link
          className="px-6  py-3 rounded text-blue-500"
          to="/notifications/create"
        >
          Save as Draft
        </Link>
        <Link
          className="px-6 py-3 bg-blue-500 rounded text-white"
          to="/notifications/create"
        >
          Publish
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

// import { Link } from "../../components";

export default function Introduction() {
  return (
    <div className="flex p-14 rounded shadow-md gap-8">
      <div className="flex flex-col gap-8 items-start justify-center">
        <h3 className="font-semibold text-2xl">
          Welcome to Pop and Convert Pro
        </h3>
        <p className="text-base font-normal">
          We're glad you're here. This platform is designed to provide you with
          all the tools and resources you need to be a successful coach. Whether
          you're new to coaching or a seasoned pro, we're confident that you'll
          find everything you need here to help your athletes.
        </p>
        <div className="flex gap-4">
          <Link
            className="px-6 py-3 bg-blue-500 rounded text-white"
            to="/notifications/create"
          >
            Create New Notification
          </Link>
          <Link
            className="px-6 py-3 border-blue-500 border rounded text-blue-500"
            to="/notifications"
          >
            All Notifications
          </Link>
        </div>
      </div>
      <div className="rounded">
        <iframe
          width="491"
          height="305"
          src="https://www.youtube.com/embed/1LkOa7Ky2ak"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Pagination from "./TablePagination";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";

const _notifications = import("./notifications.json");

export default function (props) {
  const { items, onItemChange } = props;

  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const [paginationSettings, setPaginationSettings] = useState({
    itemsPerPage: 10,
    currentPage: 1,
  });

  const handleCopyAction = (id) => {
    let toCopy = { ...items.find(({ id: _id }) => id === _id) };
    toCopy.title = toCopy.title + " - Copy";
    toCopy.id = (Math.random() + 1).toString(36).substring(7);

    // onItemChange([...items, toCopy]);
  };

  const handleDeleteAction = (id) => {
    // onItemChange(items.filter(({ id: _id }) => id !== _id));
  };

  const { itemsPerPage, currentPage } = paginationSettings;
  const itemsToDisplay = [...items].slice(
    (currentPage - 1) * itemsPerPage,
    itemsPerPage * currentPage
  );

  return (
    <>
      <table className="shadow-md">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-4 px-6 bg-blue-50 text-left  border-b"
            >
              <input
                type="checkbox"
                checked={selectedNotifications.length === items.length}
                onChange={() => {
                  if (selectedNotifications.length === items.length) {
                    setSelectedNotifications([]);
                  } else {
                    setSelectedNotifications(items.map(({ id }) => id));
                  }
                }}
              />
            </th>
            <th scope="col" className="py-4 px-6 bg-blue-50 text-left border-b">
              Notification Title
            </th>
            <th scope="col" className="py-4 px-6 bg-blue-50 text-left border-b">
              Notification Type
            </th>
            <th scope="col" className="py-4 px-6 bg-blue-50 text-left border-b">
              Stats
            </th>
            <th scope="col" className="py-4 px-6 bg-blue-50 text-left border-b">
              Status
            </th>
            <th scope="col" className="py-4 px-6 bg-blue-50 text-left border-b">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((notification) => {
            const { id, title, type, stats, status } = notification;
            return (
              <tr key={title}>
                <td scope="row" className="py-4 px-6 text-left border-b">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(id)}
                    onChange={() => {
                      setSelectedNotifications(
                        selectedNotifications.includes(id)
                          ? selectedNotifications.filter((_id) => _id !== id)
                          : [...selectedNotifications, id]
                      );
                    }}
                    name="checkbox"
                    id="checkbox"
                  />
                </td>
                <td className="py-4 px-6 text-left border-b">{title}</td>
                <td className="py-4 px-6 text-left border-b"><span className={`py-1 px-2 rounded-2xl text-xs ${type === 'Sticky' && 'bg-purple-100'} ${type === 'Popup' && 'bg-teal-100'}`}>{type}</span></td>
                <td className="py-4 px-6 text-left border-b">{stats}</td>
                <td className="py-4 px-6 text-left border-b">
                  <input
                    type="checkbox"
                    checked={"active" === status}
                    onChange={() => {
                      // onItemChange(
                      //   items.map((_notification) => {
                      //     const { id: _id, status } = _notification;
                      //     if (_id === id) {
                      //       _notification.status =
                      //         "active" === status ? "inactive" : "active";
                      //     }
                      //     return _notification;
                      //   })
                      // );
                    }}
                    id="checkbox"
                  />
                </td>
                <td className="py-4 px-6 text-left border-b flex items-center gap-1">
                  <Link to={`/notifications/${id}/edit`}>
                    <Icon icon="pen" />
                  </Link>
                  <a href="#" onClick={() => handleCopyAction(id)}>
                    <Icon icon="copy" />
                  </a>
                  <a onClick={() => handleDeleteAction(id)}>
                    <Icon icon="trash-can" />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="px-6 py-3">
              <Pagination
                numberOfItems={items.length}
                currentPage={currentPage}
                perPage={itemsPerPage}
                onPageChange={(currentPage) => {
                  setPaginationSettings({
                    ...paginationSettings,
                    currentPage,
                  });
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

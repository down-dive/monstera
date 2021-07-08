import React from "react";
import { Link } from "react-router-dom";

const NotificationList = ({ notifications }) => {
    if (!notifications || notifications.length < 1) {
        return <h3>No new notifications</h3>;
    }

    return (
        <div>
            <h3>Your friends might need help</h3>
            {notifications.map(notification => (
                <div key={notification._id} className="card mb-3">
                    <p className="card-header">
                        <Link
                            to={`/profile/${notification.createdBy}`}
                            style={{ fontWeight: 700 }}
                            className="text-light"
                        >
                            {notification.createdBy}
                        </Link>{" "}
                        posted on {notification.createdAt}
                    </p>
                    { notification.lat && notification.long && <a target="_blank" href={`http://maps.google.com/maps?q=${notification.lat},${notification.long}`}>See {notification.createdBy}'s location</a>}
                    <div className="card-body">
                        <Link to={`/post/${notification.postId}`}>
                            <p>{notification.noteContent}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NotificationList;
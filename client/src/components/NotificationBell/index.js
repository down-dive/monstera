import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";


const NotificationBell = (props) => {
    // const {state, setState} = React.useState({});
    const {loading, data} = useQuery(QUERY_ME, {
        pollInterval: 3000,
    });

    return (
        <IconButton aria-label="show new notifications" color="inherit" onClick={() => {
            props.setShowNotifications(true);
            const notifications = data.me ? data.me.notifications : [];
            props.setNotifications(notifications);
        }}>
            {data ? <Badge badgeContent={data.me.notifications.length } color="secondary">
            <NotificationsIcon />
            </Badge> : <NotificationsIcon />
            }
        </IconButton>
    );
} 

export default NotificationBell;
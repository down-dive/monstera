import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import { CLEAR_NOTIFICATIONS } from "../../utils/mutations";


const NotificationBell = (props) => {
    const {loading, data} = useQuery(QUERY_ME, {
        pollInterval: 3000,
    });
    const [clearNotifications, { error }] = useMutation(CLEAR_NOTIFICATIONS);

    const handleClick = async () => {
        props.setShowNotifications(true);
        const notifications = data.me ? data.me.notifications : [];
        props.setNotifications(notifications);
        try {
            await clearNotifications();
        } catch (e) {
            console.error(e);
        }
    }

    console.log(data);

    return (
        <IconButton aria-label="show new notifications" color="inherit" onClick={handleClick}>
            {data ? <Badge badgeContent={data.me.notifications.length } color="secondary">
            <NotificationsIcon />
            </Badge> : <NotificationsIcon />
            }
        </IconButton>
    );
} 

export default NotificationBell;
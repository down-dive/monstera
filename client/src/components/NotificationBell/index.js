import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


const NotificationBell = (props) => {
    // const {state, setState} = React.useState({});
    const {loading, data} = useQuery(QUERY_ME, {
        client: props.client,
        pollInterval: 3000,
    });

    console.log(data);

    return (
        <IconButton aria-label="show 1 new notifications" color="inherit">
            {data ? <Badge badgeContent={data.me.notifications.length } color="secondary">
            <NotificationsIcon />
            </Badge> : <NotificationsIcon />
            }
        </IconButton>
    );
} 

export default NotificationBell;
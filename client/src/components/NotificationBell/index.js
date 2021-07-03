import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";


const NotificationBell = (props) => {
    // const {state, setState} = React.useState({});
    const {loading, data} = useQuery(QUERY_USER, {
        client: props.client,
        variables: {
            // TODO: use current user or QUERY_ME once auth is done
            username: 'testUser1',
        },
        pollInterval: 3000,
    });

    return (
        <IconButton aria-label="show 1 new notifications" color="inherit">
            {data ? <Badge badgeContent={data.user.notifications.length } color="secondary">
            <NotificationsIcon />
            </Badge> : <NotificationsIcon />
            }
        </IconButton>
    );
} 

export default NotificationBell;
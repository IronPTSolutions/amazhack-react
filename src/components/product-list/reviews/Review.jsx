import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const useStylesList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));



export default function Review(props) {

    const classes = useStylesList();
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
                    <Avatar alt="Remy Sharp" src={props.image} />
                    <div className='d-flex align-center'>
                        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" /><span className='mt-2'>{props.score}</span>
                    </div>
                </ListItemAvatar>
                <ListItemText
                    primary={props.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >

                            </Typography>
                            {props.description}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}




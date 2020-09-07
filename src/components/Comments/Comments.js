import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Comments.css';
import Typography from '@material-ui/core/Typography';

const Comments = (props) => {
    const{name,email,body,id}=props.comment;
 
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
    const classes = useStyles();

    return (
        <div className="shorse">
            <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography className="type" gutterBottom variant="h5" component="h2">
          comment no:{id}
        </Typography>
        <Typography className="type" gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className="type" gutterBottom variant="h5" component="h2">
          {email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
        </div>
    );
};

export default Comments;
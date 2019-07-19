import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { getUserInfo } from "../methodes/getUserInfo";
import "./Profil.css";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(
  createStyles({
    card: {
      minWidth: 275,
      marginTop: 180,
      paddingTop: 40,
      paddingRight: 30,
      paddingLeft: 10,
      height: 478,
      width: 434
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },

    bigAvatar: {
      width: 150,
      height: 150,
      position: "absolute",
      bottom: 500
    }
  })
);
const Profil: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any | {}>({});
  useEffect(() => {
    getUserInfo().then(res =>
      setUserInfo({ ...userInfo, userInfo: res.data.results[0] })
    );
  }, []);

  const classes = useStyles();
  interface userInfo {
    gender: string;
  }

  return (
    <div className="loginform">
      <Card className={classes.card}>
        {userInfo.userInfo && (
          <>
            {console.log(userInfo.userInfo.name.first)}
            <Grid container justify="center" alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src={userInfo.userInfo.picture.large}
                className={classes.bigAvatar}
              />
            </Grid>
            <div className="info">
              <div className="name">
                {userInfo.userInfo.name.first} {userInfo.userInfo.name.last}
              </div>
              <div>
                {userInfo.userInfo.location.city}, {userInfo.userInfo.nat}
              </div>
              <p className="para">
                Phasellus dignissim, tellus in pellentesque mollis, mauris orci
                dignissim nisl, id gravida nunc enim quis nibh. Maecenas
                convallis eros a ante dignissim.
              </p>
              <div className="divider" />
              <div className="linkForm">
                <Button type="primary" className="btnForm" shape="round">
                  VOIR PROFILE
                </Button>

                <Link className="colorlink" to="/">
                  Supprimer le profile
                </Link>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default Profil;

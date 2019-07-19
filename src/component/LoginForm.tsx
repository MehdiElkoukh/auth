import React, { useState } from "react";
import "./LoginForm.css";
import { Button } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from "@material-ui/core/styles";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import Card from "@material-ui/core/Card";
const useStylesCostum = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fcfcfb",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main
      }
    },

    focused: {}
  })
);

function CostumTextField(props: TextFieldProps) {
  const classes = useStylesCostum();

  return (
    <TextField
      InputProps={
        { classes, disableUnderline: true } as Partial<OutlinedInputProps>
      }
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    card: {
      minWidth: 275,
      marginTop: 180,
      paddingTop: 40,
      paddingBottom: 40,
      paddingRight: 30,
      paddingLeft: 10
    }
  })
);

const LoginForm: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [values, setvalue] = useState({ email: "", password: "" });
  const classes = useStyles();
  const handleSubmit = (values: values): void => {
    if (values.email && values.password) props.history.push("/profil");
  };
  return (
    <div className="loginform">
      <Card className={classes.card}>
        <div className="title">Connecter-vous à votre compte</div>
        <CostumTextField
          label="Email"
          value={values.email}
          className={classes.margin}
          variant="filled"
          error={
            values.email === "" ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          }
          helperText={
            values.email === ""
              ? "ce champs est obligatoire"
              : " " &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ? "ce champs doit etre un mail"
              : " "
          }
          fullWidth
          type="email"
          onChange={e => setvalue({ ...values, email: e.target.value })}
        />
        <CostumTextField
          label="Password"
          className={classes.margin}
          variant="filled"
          fullWidth
          error={values.password === ""}
          helperText={
            values.password === "" ? "ce champs est obligatoire" : " "
          }
          onChange={e => setvalue({ ...values, password: e.target.value })}
          value={values.password}
          type="password"
        />
        <div className="linkForm">
          <Button
            onClick={() => handleSubmit(values)}
            type="primary"
            className="btnForm"
            shape="round"
          >
            S'INSCRIRE
          </Button>
          <Link className="colorlink" to="/">
            Mot de passe oublier ?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
interface values {
  email: string;
  password: string;
}

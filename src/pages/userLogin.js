import React, { useContext, useRef } from "react";
import { Grid, Container, Card, CardContent } from "@material-ui/core";
import { Context } from "../context/context";
import axiosInstance from "../services/axiosInstance";

export default function userLogin() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/user/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      console.log(res.data.type);
      if (res.data.type === "Researcher") {
        setTimeout(() => {
          window.location.href = `${window.location.origin}/research`;
        }, 1000);
      } else if (res.data.type === "Workshop Conductor") {
        setTimeout(() => {
          window.location.href = `${window.location.origin}/workshop`;
        }, 1000);
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("login failure");
    }
  };

  return (
    <div>
      <Container>
        <Grid container justify="center">
          <Grid item sm={4}></Grid>
          <Grid style={{ paddingTop: "100px" }} item sm={4}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input type="text" className="form-control" ref={userRef} />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      ref={passwordRef}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isFetching}
                  >
                    Login
                  </button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

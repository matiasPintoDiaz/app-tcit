import React from "react";
import FormPosts from "./components/FormPosts";
import ListPosts from "./components/ListPosts";
import { Container, Divider } from "@mui/material";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <br />
        <br />
        <FormPosts />
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <ListPosts />
        <br />
        <br />
      </Container>
    </>
  );
}

import { lazy, type Component, type JSX } from "solid-js";
import stylex from "@stylexjs/stylex";
import "./index.css";
import Navbar from "./Navbar";
import { colors } from "./tokens.stylex";
import { Route, Router } from "@solidjs/router";
import Home from "./Home";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    minHeight: "100vh",
  },
  nav: {
    backgroundColor: colors.primaryDark,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    backgroundColor: colors.background,
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  footer: {
    backgroundColor: colors.primaryDark,
    height: "200px",
  },
});

export default function App() {
  const Blog = lazy(() => import("./Blog"));
  return (
    <div {...stylex.props(styles.root)}>
      <Navbar />
      <main {...stylex.props(styles.main)}>
        <Router>
          <Route path="/" component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
        </Router>
      </main>
      <footer {...stylex.props(styles.footer)}></footer>
    </div>
  );
}

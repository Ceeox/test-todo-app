import { lazy, type Component, type JSX } from "solid-js";
import stylex from "@stylexjs/stylex";
import "./index.css";
import Navbar from "./Navbar";
import { colors } from "./tokens.stylex";
import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Components from "./pages/Components";

export default function App() {
  const Blog = lazy(() => import("./pages/Blog"));

  return (
    <div {...stylex.props(styles.root)}>
      <Navbar />
      <main {...stylex.props(styles.main)}>
        <Router>
          <Route path="/" component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/components" component={Components}></Route>
        </Router>
      </main>
      <footer {...stylex.props(styles.footer)}></footer>
    </div>
  );
}

const styles = stylex.create({
  root: {
    color: colors.font,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: colors.background,
  },
  main: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  footer: {
    backgroundColor: colors.primaryDark,
    height: "200px",
  },
});

import stylex from "@stylexjs/stylex";
import { colors, spacing } from "./tokens.stylex";
import Button from "./components/Button";

export default function Navbar() {
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.ul)}>
        <li>
          <Button varient="link" href="/">
            Home
          </Button>
        </li>
        <li>
          <Button varient="link" href="/blog">
            Blog
          </Button>
        </li>
        <li>
          <Button varient="link" href="/components">
            Components
          </Button>
        </li>
      </ul>
    </nav>
  );
}

const styles = stylex.create({
  nav: {
    backgroundColor: colors.primaryDark,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: spacing.md,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    gap: spacing.md,
  },
});

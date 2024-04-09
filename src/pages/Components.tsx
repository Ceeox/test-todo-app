import stylex from "@stylexjs/stylex";
import Button from "../components/Button";
import { blur, borderRadius, colors, spacing } from "../tokens.stylex";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "../components/Carrd";

function ButtonExample() {
  return (
    <div
      {...stylex.props(
        styles.containerVertical,
        styles.backdrop,
        styles.containerPadding
      )}
    >
      <h2>Buttons</h2>

      <div {...stylex.props(styles.containerVertical)}>
        <h3>Styles</h3>
        <div {...stylex.props(styles.containerHorizontal)}>
          <Button varient="default">Default</Button>
          <Button varient="solid">Solid</Button>
          <Button varient="outline">Outline</Button>
          <Button varient="link">Link</Button>
        </div>
      </div>

      <div {...stylex.props(styles.containerVertical)}>
        <h3>Secondary Color</h3>
        <div {...stylex.props(styles.containerHorizontal)}>
          <Button color="secondary" varient="default">
            Default
          </Button>
          <Button color="secondary" varient="solid">
            Solid
          </Button>
          <Button color="secondary" varient="outline">
            Outline
          </Button>
          <Button color="secondary" varient="link">
            Link
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.containerVertical)}>
        <h3>Disabled</h3>
        <div {...stylex.props(styles.containerHorizontal)}>
          <Button varient="default" disabled>
            Default
          </Button>
          <Button varient="solid" disabled>
            Solid
          </Button>
          <Button varient="outline" disabled>
            Outline
          </Button>
          <Button varient="link" disabled>
            Link
          </Button>
        </div>
      </div>
    </div>
  );
}

function CardExample() {
  return (
    <div
      {...stylex.props(
        styles.containerVertical,
        styles.backdrop,
        styles.containerPadding
      )}
    >
      <h2>Card</h2>
      <Card>
        <CardHeader title="Nice Picture" />
        <CardContent>
          <img
            {...stylex.props(styles.blur)}
            src="https://picsum.photos/200/300"
          />
        </CardContent>
        <CardActions>
          <Button>Save</Button>
          <Button varient="solid">Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default function Components() {
  return (
    <div {...stylex.props(styles.containerPadding, styles.containerVertical)}>
      <h1>Components</h1>
      <ButtonExample />
      <CardExample />
    </div>
  );
}

const styles = stylex.create({
  backdrop: {
    backgroundColor: colors.forground,
    borderRadius: borderRadius.lg,
  },
  containerPadding: {
    padding: spacing.md,
  },
  containerHorizontal: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.md,
    width: "100%",
  },
  containerVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: spacing.md,
    width: "100%",
  },
  blur: {
    filter: blur.sm,
  },
});

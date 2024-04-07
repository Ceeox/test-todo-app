import stylex from "@stylexjs/stylex";
import { colors, spacing, width } from "../tokens.stylex";
import { Component, JSX, children } from "solid-js";

export type CardContentProps = {
  children?: JSX.Element;
};

export function CardContent(props: CardContentProps) {
  return <div {...stylex.props(styles.content)}>{props.children}</div>;
}

export type CardHeaderProps = {
  title: string;
};

export function CardHeader(props: CardHeaderProps) {
  return (
    <>
      <h3 {...stylex.props(styles.header)}>{props.title}</h3>
    </>
  );
}

export type CardActionsProps = {
  direction?: "start" | "center" | "end";
  children?: JSX.Element;
};

export function CardActions(props: CardActionsProps) {
  const { direction = "end" } = props;
  return (
    <div {...stylex.props(styles.actions, styles[direction])}>
      {props.children}
    </div>
  );
}

export type CardProps = {
  children?: JSX.Element;
};

export default function Card(props: CardProps) {
  return <div {...stylex.props(styles.card)}>{props.children}</div>;
}

const styles = stylex.create({
  card: {
    padding: spacing.md,
    borderColor: colors.border,
    borderWidth: width.sm,
    borderStyle: "solid",
    borderRadius: width.lg,
    backgroundColor: colors.forground,
  },
  header: {
    paddingBottom: spacing.md,
  },
  actions: {
    display: "flex",
    flexDirection: {
      default: "row",
    },
    gap: spacing.md,
    paddingTop: spacing.md,
  },
  start: {
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
  },
  end: {
    justifyContent: "flex-end",
  },
  content: {},
});

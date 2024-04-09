import stylex from "@stylexjs/stylex";
import { ComponentProps, JSX } from "solid-js";
import { borderWidth, colors, padding, spacing } from "../tokens.stylex";

type ButtonProps = {
  varient?: "default" | "solid" | "outline" | "link";
  color?: "primary" | "secondary";
  children?: JSX.Element;
} & ComponentProps<"button"> &
  ComponentProps<"a">;

export default function Button(props: ButtonProps) {
  const { varient = "default", color = "primary" } = props;

  if (varient === "link" && props.href) {
    return (
      <a {...stylex.props(styles.base, styles.link)} {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button
      {...stylex.props(
        styles.base,
        styles[varient],
        stylesGroups[color][varient].base,
        props.disabled && styles.disabled,
        props.disabled && stylesGroups[color][varient].disabled
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    color: colors.font,
    paddingHorizontal: padding["3.5"],
    paddingVertical: padding[2],
    cursor: { ":hover": "pointer" },
  },

  default: {
    border: 0,
    borderRadius: { default: spacing.none, ":hover": spacing.xs },
  },

  solid: {
    border: 0,
    borderRadius: { default: spacing.xs, ":hover": spacing.xs },
  },
  outline: {
    borderRadius: spacing.xs,
    borderColor: colors.border,
    borderWidth: borderWidth.md,
    borderStyle: "solid",
    backgroundColor: "transparent",
  },
  link: {
    textDecoration: { default: "none", ":hover": "underline" },
  },

  disabled: {
    opacity: "50%",
    cursor: "inherit",
  },
});

const primaryDefaultStyle = stylex.create({
  base: {
    backgroundColor: { default: "unset", ":hover": colors.primaryDark },
  },
  disabled: {
    backgroundColor: { default: "unset" },
  },
});
const primarySolidStyle = stylex.create({
  base: {
    backgroundColor: { default: colors.primary, ":hover": colors.primaryDark },
  },
  disabled: {
    backgroundColor: { default: colors.primary },
  },
});
const primaryOutlineStyle = stylex.create({
  base: {
    backgroundColor: { default: "unset", ":hover": colors.primaryDark },
  },
  disabled: {
    backgroundColor: { default: "unset" },
  },
});
const primaryLinkStyle = stylex.create({
  base: {
    border: 0,
    backgroundColor: "transparent",
    textDecoration: { default: "transparent", ":hover": "underline" },
  },
  disabled: {
    textDecoration: { default: "none", ":hover": "none" },
  },
});

const secondaryDefaultStyle = stylex.create({
  base: {
    backgroundColor: { default: "unset", ":hover": colors.secondaryDark },
  },
  disabled: {
    backgroundColor: { default: "unset", ":hover": "unset" },
  },
});
const secondarySolidStyle = stylex.create({
  base: {
    backgroundColor: {
      default: colors.secondary,
      ":hover": colors.secondaryDark,
    },
  },
  disabled: {
    backgroundColor: { default: colors.secondary },
  },
});
const secondaryOutlineStyle = stylex.create({
  base: {
    backgroundColor: { default: "unset", ":hover": colors.secondaryDark },
  },
  disabled: {
    backgroundColor: { default: "unset", ":hover": "unset" },
  },
});
const secondaryLinkStyle = stylex.create({
  base: {
    border: 0,
    backgroundColor: "transparent",
    textDecoration: { default: "none", ":hover": "underline" },
  },
  disabled: {
    textDecoration: { default: "none", ":hover": "none" },
  },
});

const primaryStyle = {
  default: primaryDefaultStyle,
  solid: primarySolidStyle,
  outline: primaryOutlineStyle,
  link: primaryLinkStyle,
};

const secondaryStyle = {
  default: secondaryDefaultStyle,
  solid: secondarySolidStyle,
  outline: secondaryOutlineStyle,
  link: secondaryLinkStyle,
};

const stylesGroups = {
  primary: primaryStyle,
  secondary: secondaryStyle,
};

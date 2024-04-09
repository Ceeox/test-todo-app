import stylex from "@stylexjs/stylex";

export default function Home() {
  return <div {...stylex.props()}>Home</div>;
}

const styles = stylex.create({});

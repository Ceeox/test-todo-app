import stylex from "@stylexjs/stylex";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "../components/Carrd";
import Button from "../components/Button";
import { colors, spacing } from "../tokens.stylex";

export default function Blog() {
  return (
    <div {...stylex.props(style.blog)}>
      <article>
        <h1 {...stylex.props(style.title)}>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras
          ornare arcu dui. Porta lorem mollis aliquam ut porttitor leo. Semper
          auctor neque vitae tempus quam pellentesque. Turpis egestas integer
          eget aliquet nibh praesent tristique magna sit. In hac habitasse
          platea dictumst quisque. Id cursus metus aliquam eleifend mi in nulla
          posuere sollicitudin. Elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus. Dictum fusce ut placerat orci. Viverra vitae
          congue eu consequat ac felis donec et odio. Adipiscing at in tellus
          integer feugiat scelerisque varius. Sit amet consectetur adipiscing
          elit duis tristique sollicitudin nibh. Dolor sit amet consectetur
          adipiscing elit pellentesque. Blandit aliquam etiam erat velit
          scelerisque in dictum. Pulvinar elementum integer enim neque volutpat.
          Eu sem integer vitae justo.
        </p>
        <p>
          Neque sodales ut etiam sit. Cras pulvinar mattis nunc sed blandit
          libero volutpat sed cras. Ut sem nulla pharetra diam sit amet nisl
          suscipit adipiscing. Sagittis orci a scelerisque purus. Potenti nullam
          ac tortor vitae purus faucibus ornare suspendisse. Aliquam ultrices
          sagittis orci a scelerisque purus semper eget. Justo laoreet sit amet
          cursus sit amet. Egestas dui id ornare arcu odio ut sem nulla.
          Accumsan sit amet nulla facilisi morbi tempus. Integer malesuada nunc
          vel risus commodo viverra. Pharetra sit amet aliquam id diam maecenas
          ultricies. Laoreet sit amet cursus sit amet dictum.
        </p>
        <p>
          Volutpat odio facilisis mauris sit amet. Nec feugiat in fermentum
          posuere urna. Suscipit adipiscing bibendum est ultricies integer quis
          auctor elit. Ut sem viverra aliquet eget sit amet tellus. Urna
          molestie at elementum eu facilisis sed. Lobortis mattis aliquam
          faucibus purus in massa tempor nec. Vivamus at augue eget arcu dictum.
          Ultricies mi quis hendrerit dolor magna eget est lorem. Lectus mauris
          ultrices eros in. Leo vel fringilla est ullamcorper eget nulla
          facilisi etiam dignissim. Nisi est sit amet facilisis magna etiam
          tempor orci eu. Mi sit amet mauris commodo quis imperdiet massa. Est
          ultricies integer quis auctor. Et ultrices neque ornare aenean euismod
          elementum. Et odio pellentesque diam volutpat commodo. Tempor orci
          dapibus ultrices in iaculis nunc sed. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Tincidunt vitae semper quis lectus. Sit amet
          cursus sit amet dictum sit amet justo.
        </p>
      </article>
      <Card>
        <CardHeader title="Nice Picture" />
        <CardContent>
          <img src="https://picsum.photos/200/300" />
        </CardContent>
        <CardActions>
          <Button>Save</Button>
          <Button varient="solid">Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
}

const style = stylex.create({
  blog: {
    color: colors.font,
    minHeight: "300px",
    paddingHorizontal: spacing["xxxl"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xl,
  },
  title: {
    color: colors.font,
    textAlign: "center",
    paddingVertical: spacing.xl,
  },
});

import Image from "next/image";

export function ImageWithBlur(props) {
  const layout = props.layout || "fill";
  const dimensions = layout !== "fill" ? props.aspect_ratio : {};

  const { blurURL, ...recognizedDOMPros } = props;

  return (
    <Image
      {...recognizedDOMPros}
      src={props.src}
      alt={props.alt}
      layout={layout}
      objectFit={props.objectFit || "cover"}
      placeholder="blur"
      blurDataURL={blurURL}
      {...dimensions}
    />
  );
}

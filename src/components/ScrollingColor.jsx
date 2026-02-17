export default function ScrollingColor({ color, children }) {

  return <span data-scrolling-color={color}>{children}</span>;
}

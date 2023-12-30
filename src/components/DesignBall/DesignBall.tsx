import "./DesignBall.scss";

export default function DesignBall({
  color,
  leftPx,
  rightPx,
  topPx,
}: {
  color: string;
  leftPx: string;
  rightPx: string;
  topPx: string;
}) {
  return (
    <aside
      style={{
        backgroundColor: color,
        top: topPx,
        left: leftPx,
        right: rightPx,
      }}
      className="design-ball"
    ></aside>
  );
}

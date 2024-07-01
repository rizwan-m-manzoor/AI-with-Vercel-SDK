export function Separator({ orientation = "horizontal" }) {
    return (
      <div className={`separator ${orientation === "vertical" ? "separator-vertical" : "separator-horizontal"}`}></div>
    );
  }
  
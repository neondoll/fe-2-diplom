import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { useState } from "react";
import "./ProgressBar.css";

function ProgressBar({ className }) {
  const loadTime = performance.getEntriesByType("navigation");
  const [count, setCount] = useState(99999);

  window.onload = function () {
    setCount(loadTime[0].domComplete);
  };

  return (
    <div className={cn("progress-bar", className)}>
      <progress
        className="progress-bar__progress"
        max="100"
        style={{ animationDuration: `${count / 10}ms` }}
        value="0"
        aria-label="Загрузка страницы"
      />
    </div>
  );
}

ProgressBar.propTypes = { className: classNameType };

export default ProgressBar;

import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import RoutesSearchForm from "../../../components/RoutesSearch/Form/RoutesSearchForm.jsx";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RootWidget.css";

function RootWidget({ className }) {
  return (
    <div className={cn("root-widget", className)}>
      <div className="root-widget__container container">
        <h1 className="root-widget__title">
          {"Вся жизнь -\n"}
          <span className="font-bold">путешествие!</span>
        </h1>
        <RoutesSearchForm className="root-widget__search" />
      </div>
      <ProgressBar className="root-widget__progress-bar" />
    </div>
  );
}

RootWidget.propTypes = { className: classNameType };

export default RootWidget;

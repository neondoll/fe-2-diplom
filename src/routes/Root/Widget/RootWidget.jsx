import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import TicketSearchForm from "../../../components/TicketSearchForm/TicketSearchForm";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import "./RootWidget.css";

function RootWidget({ className }) {
  return (
    <div className={cn("root-widget", className)}>
      <div className="root-widget__container container">
        <h1 className="root-widget__title">
          Вся жизнь -
          <br />
          <span className="font-bold">путешествие!</span>
        </h1>
        <TicketSearchForm className="root-widget__search" />
      </div>
      <ProgressBar className="root-widget__progress-bar" />
    </div>
  );
}

RootWidget.propTypes = { className: classNameType };

export default RootWidget;

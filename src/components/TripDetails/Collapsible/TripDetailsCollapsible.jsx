import * as Collapsible from "@radix-ui/react-collapsible";
import MinusSquareIcon from "../../../icons/MinusSquareIcon";
import PlusSquareIcon from "../../../icons/PlusSquareIcon";
import PropTypes from "prop-types";
import { childrenType, classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { useState } from "react";
import "./TripDetailsCollapsible.css";

function TripDetailsCollapsible({ children, className, icon, subtitleComponent, title }) {
  const Icon = icon;
  const [open, setOpen] = useState(true);

  return (
    <Collapsible.Root
      className={cn("trip-details-collapsible", className)}
      open={open}
      onOpenChange={setOpen}
    >
      <div className="trip-details-collapsible__header">
        <Icon className="trip-details-collapsible__icon" />
        <h2 className="trip-details-collapsible__title">{title}</h2>
        {subtitleComponent}
        <Collapsible.Trigger className="trip-details-collapsible__trigger">
          {open ? <MinusSquareIcon /> : <PlusSquareIcon />}
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="trip-details-collapsible__content">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}

TripDetailsCollapsible.propTypes = {
  children: childrenType,
  className: classNameType,
  icon: PropTypes.func.isRequired,
  subtitleComponent: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default TripDetailsCollapsible;

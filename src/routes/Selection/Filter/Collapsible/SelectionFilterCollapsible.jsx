import * as Collapsible from "@radix-ui/react-collapsible";
import MinusSquareIcon from "../../../../icons/MinusSquareIcon.jsx";
import PlusSquareIcon from "../../../../icons/PlusSquareIcon.jsx";
import PropTypes from "prop-types";
import { childrenType, classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useState } from "react";
import "./SelectionFilterCollapsible.css";

function SelectionFilterCollapsible({ children, className, icon, title }) {
  const Icon = icon;
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root className={cn("selection-filter-collapsible", className)} open={open} onOpenChange={setOpen}>
      <div className="selection-filter-collapsible__header">
        <Icon className="selection-filter-collapsible__icon" />
        <h2 className="selection-filter-collapsible__title">{title}</h2>
        <Collapsible.Trigger asChild>
          <button className="selection-filter-collapsible__trigger">
            {open ? <MinusSquareIcon /> : <PlusSquareIcon />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="selection-filter-collapsible__content">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}

SelectionFilterCollapsible.propTypes = {
  children: childrenType,
  className: classNameType,
  icon: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default SelectionFilterCollapsible;

import * as Collapsible from "@radix-ui/react-collapsible";
import MinusSquareIcon from "../../../../icons/MinusSquareIcon";
import PlusSquareIcon from "../../../../icons/PlusSquareIcon";
import PropTypes from "prop-types";
import { childrenType, classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { useState } from "react";
import "./RoutesSearchFilterCollapsible.css";

function RoutesSearchFilterCollapsible({ children, className, icon, title }) {
  const Icon = icon;
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root className={cn("routes-search-filter-collapsible", className)} open={open} onOpenChange={setOpen}>
      <div className="routes-search-filter-collapsible__header">
        <Icon className="routes-search-filter-collapsible__icon" />
        <h2 className="routes-search-filter-collapsible__title">{title}</h2>
        <Collapsible.Trigger asChild>
          <button className="routes-search-filter-collapsible__trigger">
            {open ? <MinusSquareIcon /> : <PlusSquareIcon />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="routes-search-filter-collapsible__content">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}

RoutesSearchFilterCollapsible.propTypes = {
  children: childrenType,
  className: classNameType,
  icon: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default RoutesSearchFilterCollapsible;

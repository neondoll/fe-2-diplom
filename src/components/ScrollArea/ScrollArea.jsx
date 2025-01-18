import * as ReactScrollArea from "@radix-ui/react-scroll-area";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./ScrollArea.css";

function ScrollArea({ children, className }) {
  return (
    <ReactScrollArea.Root className={cn("scroll-area", className)}>
      <ReactScrollArea.Viewport className="scroll-area__viewport">{children}</ReactScrollArea.Viewport>
      <ReactScrollArea.Scrollbar className="scroll-area__scrollbar" orientation="horizontal">
        <ReactScrollArea.Thumb className="scroll-area__thumb" />
      </ReactScrollArea.Scrollbar>
      <ReactScrollArea.Scrollbar className="scroll-area__scrollbar" orientation="vertical">
        <ReactScrollArea.Thumb className="scroll-area__thumb" />
      </ReactScrollArea.Scrollbar>
      <ReactScrollArea.Corner className="scroll-area__corner" />
    </ReactScrollArea.Root>
  );
}

ScrollArea.propTypes = { children: childrenType, className: classNameType };

export default ScrollArea;

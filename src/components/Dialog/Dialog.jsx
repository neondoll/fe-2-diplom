import * as ReactDialog from "@radix-ui/react-dialog";
import ErrorIcon from "../../icons/ErrorIcon";
import InfoIcon from "../../icons/InfoIcon";
import PropTypes from "prop-types";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Dialog.css";

function Dialog({ contentClassName, description, title, trigger, type, ...props }) {
  return (
    <ReactDialog.Root {...props}>
      <ReactDialog.Trigger asChild>{trigger}</ReactDialog.Trigger>
      <ReactDialog.Portal>
        <ReactDialog.Overlay className="dialog__overlay" />
        <ReactDialog.Content className={cn(`dialog__content dialog__content--${type}`, contentClassName)}>
          <div className="dialog__header">
            {type === "error" && <ErrorIcon />}
            {type === "info" && <InfoIcon />}
          </div>
          <div className="dialog__body">
            <ReactDialog.Title className="dialog__title">{title}</ReactDialog.Title>
            <ReactDialog.Description className="dialog__description">{description}</ReactDialog.Description>
          </div>
          <div className="dialog__footer">
            <ReactDialog.Close className="dialog__close">Понятно</ReactDialog.Close>
          </div>
        </ReactDialog.Content>
      </ReactDialog.Portal>
    </ReactDialog.Root>
  );
}

Dialog.propTypes = {
  contentClassName: classNameType,
  defaultOpen: PropTypes.bool,
  description: childrenType,
  modal: PropTypes.bool,
  onOpenChange: PropTypes.func,
  open: PropTypes.bool,
  title: childrenType,
  trigger: PropTypes.node,
  type: PropTypes.oneOf(["error", "info"]).isRequired,
};

export default Dialog;

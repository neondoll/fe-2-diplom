import PropTypes from "prop-types";
import { classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import { OTPInput } from "input-otp";
import "./InputOTP.css";

function InputOTPSlot({ char, hasFakeCaret, isActive }) {
  return (
    <div className="input-otp__slot" data-active={isActive}>
      {char}
      {hasFakeCaret && (
        <div className="input-otp__fake-caret" />
      )}
    </div>
  );
}

InputOTPSlot.propTypes = { char: PropTypes.string, hasFakeCaret: PropTypes.bool, isActive: PropTypes.bool };

function InputOTP({ className, maxLength, slotWidth = "12px", ...props }) {
  return (
    <OTPInput
      containerClassName={cn("input-otp", className)}
      maxLength={maxLength}
      render={({ slots }) => (
        <div className="input-otp__group" style={{ gridTemplateColumns: `repeat(${maxLength}, ${slotWidth})` }}>
          {slots.map((slot, index) => (
            <InputOTPSlot key={index} {...slot} />
          ))}
        </div>
      )}
      {...props}
    />
  );
}

InputOTP.propTypes = { className: classNameType, maxLength: PropTypes.number.isRequired, slotWidth: PropTypes.string };

export default InputOTP;

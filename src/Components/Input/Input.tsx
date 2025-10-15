import { useState } from "react";
import classes from "./Input.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

type InputProps = {
  type?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  isRequired?: boolean;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: string;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
};

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState(false);
  const [passwordIsViewable, setpasswordisViewable] = useState(false);

  return (
    <div className={classes.container} style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <span className={classes.input}>
        <input
          type={
            type === "password" && passwordIsViewable
              ? "text"
              : type === "password" && !passwordIsViewable
              ? "password"
              : type
              ? type
              : "text"
          }
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === "") {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className={invalid ? classes.invalid : classes.valid}
        />
        {type === "password" && (
          <span>
            {!passwordIsViewable ? (
              <RemoveRedEyeOutlinedIcon
                color="inherit"
                style={{ color: "grey" }}
                onClick={() => {
                  setpasswordisViewable(true);
                }}
              />
            ) : (
              <VisibilityOffOutlinedIcon
                color="inherit"
                style={{ color: "grey" }}
                onClick={() => {
                  setpasswordisViewable(false);
                }}
              />
            )}
          </span>
        )}
      </span>
      {(invalid || inValidCondition) && (
        <span className={classes.errorMessage}>
          {errorMessage || "*invalid"}{" "}
        </span>
      )}
      {tip && <span className={classes.tip}>{tip}</span>}
    </div>
  );
};

export default Input;

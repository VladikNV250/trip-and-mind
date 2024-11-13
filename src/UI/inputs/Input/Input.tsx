import classes from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function Input({className, ...inputProps}: Props) {
    return (
        <input
          className={`${classes.input} ${className}`}
          {...inputProps}
        />
    )
}
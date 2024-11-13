import classes from "./Heading.module.scss";
type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface Props {
    level?: Headings,
    children?: React.ReactNode,
    className?: string,
}

export default function Heading({level = "h1", children, className}: Props) {
    const Tag: Headings = level;

  return (
    <Tag className={`${classes[level]} ${className}`}>
        {children}
    </Tag>
  )
}

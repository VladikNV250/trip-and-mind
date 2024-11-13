// import classes from "./IconLink.module.scss";

interface Props {
    href?: string,
    color?: string,
    width?: number,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export default function IconLink({href = "/", color = "#fff", width = 18, Icon}: Props) {
  return (
    <a href={href}>
        <Icon 
            width={width} 
            color={color} 
        />
    </a>
  )
}

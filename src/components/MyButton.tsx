import * as style from "./MyButton.module.scss"

export default function MyButton() {
  return (
    <>
        <div className={style.value}>Hello</div>
        <button className={style.button}>Click</button>
    </>
  )
}

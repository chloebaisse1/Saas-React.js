import { logoApp } from "../assets/index"
import { Container } from "./Container"
export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"bg-n-9"}>
        <img src={logoApp} width={104} height={32} alt="App_logo" />
        <button>Login</button>
      </Container>
    </div>
  )
}

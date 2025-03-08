import { logoApp } from "../assets/index"
import { Button } from "./Button"
import { Container } from "./Container"
export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"bg-n-9"}>
        <div className="flex items-center justify-between py-4 lg:py-6">
          <img src={logoApp} width={104} height={32} alt="App_logo" />
          <Button theme="primary">Login</Button>
        </div>
      </Container>
    </div>
  )
}

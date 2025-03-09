import { icoArrowRight } from "../assets"
import { Button } from "./Button"
import { Container } from "./Container"

export const CallToAction = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div className="flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8">
          <div className="space-y-4 text-center">
            <div className="caption-1 text-n-1/50">Ready to Start ?</div>
            <h3 className="h3">Start your free trial today !</h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
          >
            <span>Get Started</span>
            <img
              src={icoArrowRight}
              alt="icone d'une fleche"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </Container>
  )
}

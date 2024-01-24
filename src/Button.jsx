import { useState } from "react"

const Button = () => {
  const [isRed, setIsRed] = useState(true)

  console.log(isRed);

  return (
    <button onClick={() => setIsRed(!isRed)} style={{ background: isRed ? "red" : "blue" }}>
      {isRed ? "Turn Blue" : "Turn Red"}
    </button>
  )
}

export default Button
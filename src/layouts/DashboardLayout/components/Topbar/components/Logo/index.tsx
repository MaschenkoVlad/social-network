import { ILogoProps } from "./types"

const Logo: React.FC<ILogoProps> = ({ label }): JSX.Element => {
  return (
    <div>
      <h2>{label}</h2>
    </div>
  )
}

export default Logo

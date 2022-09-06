import { useEffect, useRef } from 'react'
import './index.scss'
import LogoK from '../../../assets/images/k-logo.png'
const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoK} alt="K" />
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 470.1 487.11"
      >
        <g className="svg-conatiner" id="K">
          <path
            class="cls-1"
            ref={outlineLogoRef}
            d="M426.16,12.89h-155.43L114.89,188.66V12.89H0V487.11H114.89v-143.62l53.9-56.7,113.32,200.32h145.99L249.13,202.54,426.16,12.89Z"
          />
        </g>
        <g className="svg-container" id="K-2" data-name="K">
          <path
            ref={outlineLogoRef}
            class="cls-2"
            d="M468.16,0h-155.43L156.89,175.77V0H42V474.22h114.89v-143.62l53.9-56.7,113.32,200.32h145.99L291.13,189.65,468.16,0Z"
          />
        </g>
      </svg>
    </div>
  )
}
export default Logo

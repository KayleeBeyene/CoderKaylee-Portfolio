import { useEffect, useRef } from 'react'
import './index.scss'
import LogoK from '../../../assets/images/programmer.png'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoK} alt="K" />
      <svg
        id="Layer_1"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        className="svg-container"
        fill="none"
      >
        <path
          ref={outlineLogoRef}
          d="m286.7534 335.4886-7.4029 7.4034 21.9976 22.0493-21.9976 22.0527 7.4029 7.4 29.4526-29.4526-29.4526-29.4527zm-68.9849 0-29.4526 29.4527 29.4526 29.4526 7.4021-7.4-21.9968-22.0527 21.9968-22.0493-7.4021-7.4034zm41.8949-.892-24.6226 59.4316 9.7126 4.04 24.57-59.4282zm92.6107-47.9336a13.3351 13.3351 0 0 1 13.3344 13.337v130.83h40.0052v6.6684a13.3865 13.3865 0 0 1 -13.3352 13.3335h-279.8248a13.3857 13.3857 0 0 1 -13.3353-13.3335v-6.6684h40.1625v-130.83a13.3331 13.3331 0 0 1 13.3352-13.3335h199.5c.0529-.0034.1051-.0034.158-.0034zm-153.0386-69.2994a99.0066 99.0066 0 0 0 106.8375 0c3.15.5777 6.3 1.1553 9.2922 1.8389a217.668 217.668 0 0 1 74.0255 32.4981 44.7239 44.7239 0 0 1 15.2245 28.14l15.75 93.502a14.9128 14.9128 0 0 1 -6.51 13.6513l-37.9045 23.7822v-110.7761a23.8348 23.8348 0 0 0 -23.8356-23.8335h-199.5c-.0521-.0034-.1051-.0034-.1576-.0034a23.8386 23.8386 0 0 0 -23.8343 23.8369v113.661l-35.9626-23.7275a21.6851 21.6851 0 0 1 -8.2954-19.8448l15.75-90.248c1.9957-11.0264 5.88-22.1553 15.2254-28.14a236.2781 236.2781 0 0 1 74.4446-32.604zm53.1306-168.0512a84 84 0 1 1 -84 84 84 84 0 0 1 84-84z"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  )
}
export default Logo

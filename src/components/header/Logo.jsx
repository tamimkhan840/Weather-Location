import  MainLogo  from "../../assets/logo.svg";

function Logo() {
  return (
    <>
        <a href="./index.html">
			<img className="h-9" src={MainLogo} alt="Weather App" />
		</a>
    </>
  )
}

export default Logo

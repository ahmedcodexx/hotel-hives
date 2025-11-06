import { HashLoader } from "react-spinners"


const Loader = ({height}) => {
  return (
    <div className={`w-full h-${height ? height : "full"} flex-center `}>
      <HashLoader color="#432dd7"/> 
    </div>
  )
}

export default Loader
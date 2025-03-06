import { useParams } from "react-router-dom";

const Contact=()=>{
    const {city}=useParams();

    return (

        <>
        {city}
        <div>Contact Page</div></>
    )
}
export default Contact;
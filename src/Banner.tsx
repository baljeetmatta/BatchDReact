import ProductBanner from "./ProductBanner";
import sofa1 from "./assets/sofa-1.png";
import sofa2 from "./assets/sofa-2.png";

const Banner=()=>{
    return (

        <>
        {/* Container */}
            <div className="container">
                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Cols 1 */}
                    <ProductBanner offer="30% offer" image={sofa1}/>
                    {/* Cols 2 */}
                    <ProductBanner offer="50% offer" image={sofa2}/>

                    
                   

                </div>
            </div>
        </>
    )
}
export default Banner;

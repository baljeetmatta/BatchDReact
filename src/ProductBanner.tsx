
type ProductProps={
    offer:string;
    image:string
}
const ProductBanner=(props:ProductProps)=>{
    return (
        <>
        <div className="flex gap-4 bg-red-200 p-4">
                    <div>
                            <div>{props.offer}</div>
                            <div>Free Shipping</div>
                            <div>Attractive Natural Furniture</div>
                            <div><a href="#">Shop now</a></div>

                    </div>
                    <img src={props.image} className="w-48"/>
                    </div>
        </>
    )
}
export default ProductBanner;

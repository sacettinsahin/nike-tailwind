import {star} from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img src={imgURL} alt={name} className="w-[280px] h-[280px]"  />
    <div className="mt-8 flex flex-col justify-start gap-1">
        <img src={star} width={24} height={24} alt="rating"/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray mt-2">(4.5)</p>
        <h3 className="mt-0.5 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-0.5 font-semibold font-montserrat text-coral-red text-2xl">{price}</p>
    </div>
    </div>
  )
}

export default PopularProductCard

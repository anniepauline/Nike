import Button from "../components/Button"
import {offer} from "../assets/images"
import  {arrowRight}  from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1">
      <img src={offer} width={773} height={683} className="object-contain w-full"/>
      </div>

      <div>
        <h2 className=' text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special</span> Offer         
        </h2>

        <p className=' mt-6 mb-14 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop now' iconURL={arrowRight} />
        <Button label='Learn more' backgroungColor="bg-white" borderColor="border-slate-grey" textColor="text-slate-grey"  />
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer
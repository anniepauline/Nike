import ReviewCard  from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">

      <h3 className="text-4xl font-palanquin text-center font-bold">What Our?
        <span className="text-coral-red">Customers</span>Say?
      </h3>

    <p className="info-text mt-4max-w-lg text-center m-autos">Hear genuine stories from our sttisfies customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard key={review.imgURL} imgURL={review.imgURL} CustomerName={review.customerName}
          rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
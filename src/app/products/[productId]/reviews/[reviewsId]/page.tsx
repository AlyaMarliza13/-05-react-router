type Props = {
    params: {
          reviewsId: string
    }
  }
  
  export default function ReviewsDetails({ params }: Props) {
    return (
          <h1>Details about review {params.reviewsId}</h1>
    )
  }
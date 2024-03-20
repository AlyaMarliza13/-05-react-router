type Props = {
    params: {
          blogsId: string
    }
  }
  
  export default function BlogsDetails({ params }: Props) {
    return (
          <h1>Details about blogs {params.blogsId}</h1>
    )
  }
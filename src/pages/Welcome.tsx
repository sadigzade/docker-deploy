import { useSearchParams } from "react-router-dom";

const Welcome = () => {
  const [searchParams] = useSearchParams()

  const id = searchParams.get('id')

  return (
    <div>
      <h1>Welcome Page</h1>
      <h2>id = {id}</h2>
    </div>
  )
}

export default Welcome

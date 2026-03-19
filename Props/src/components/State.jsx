import City from './City'

const State = (props) => {
  return (
    <>
      <h2>Hello From {props.state} State</h2>
      <City city={props.city}></City>
    </>
  )
}

export default State;

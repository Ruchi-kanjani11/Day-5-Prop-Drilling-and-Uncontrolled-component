import State from './State';

const Country = (props) => {
  return (
   <>
   <h2>Hello From {props.country} Country</h2>
   <State state={props.state} city={props.city}></State>
   </>
  )
}

export default Country;

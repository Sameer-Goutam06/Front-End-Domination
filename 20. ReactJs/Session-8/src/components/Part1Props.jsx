import PropTypes from 'prop-types';

// 1. Basic Props
const Welcome = (props) => <h2>1. Basic Props</h2> || <h3>Hello, {props.name}!</h3>;
Welcome.propTypes ={name:PropTypes.string};

// 2. Default Props
const Greeting = ({ name = "Guest" }) => (
  <>
    <h2>2. Default Props</h2>
    <h3>Welcome, {name}!</h3>
  </>
);
Greeting.propTypes = { name: PropTypes.string };

// 3. Destructured Props
const Profile = ({ name, age }) => (
  <>
    <h2>3. Destructured Props</h2>
    <p>{name} is {age} years old.</p>
  </>
);
Profile.propTypes ={name:PropTypes.string,age:PropTypes.number};

// 4. Children Props
const Card = ({ children }) => (
  <>
    <h2>4. Children Props</h2>
    <div className="card">{children}</div>
  </>
);
Card.propTypes = { children: PropTypes.node };

// 5. Callback Props
const Button = ({ onClick }) => (
  <>
    <h2>5. Callback Props</h2>
    <button onClick={onClick}>Click Me</button>
  </>
);
Button.propTypes = { onClick: PropTypes.func.isRequired };

// 6. Prop Types Validation
const Info = ({ age }) => (
  <>
    <h2>6. Prop Types Validation</h2>
    <p>Age: {age}</p>
  </>
);
Info.propTypes = { age: PropTypes.number.isRequired };

const PropsDemo = () => {
  return (
    <div>
      {/* Basic Props */}
      <Welcome name="Sameer" />

      {/* Default Props */}
      <Greeting />
      <Greeting name="John" />

      {/* Destructured Props */}
      <Profile name="Sameer" age={25} />

      {/* Children Props */}
      <Card>
        <h3>Title</h3>
        <p>This is card content.</p>
      </Card>

      {/* Callback Props */}
      <Button onClick={() => alert("Button Clicked!")} />

      {/* Prop Types Validation */}
      <Info age={30} />
    </div>
  );
};

export default PropsDemo;

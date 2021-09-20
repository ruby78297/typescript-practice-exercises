type greetIs = {
  name: string;
};

export const Greet = (props: greetIs) => {
  return <div>my name is {props.name}</div>;
};

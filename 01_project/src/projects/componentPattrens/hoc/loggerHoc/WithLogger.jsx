import { useRef } from "react";

function WithLogger(WrappedComponent) {
  const LoggerComponent = (props) => {
    const render = useRef(0);

    render.current++;

    console.log(
      `[Render #${render.current}] Props:`,
      WrappedComponent.name,
      props
    );

    return <WrappedComponent {...props} />;
  };

  return LoggerComponent;
}

export default WithLogger;

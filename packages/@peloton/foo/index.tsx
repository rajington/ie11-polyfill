import React from "react";

export default () => {
  const [state, setState] = React.useState<null | number>(null);

  return (
    <div>
      <button
        onClick={() => {
          setState(5);
        }}
      >
        {state ?? 3}
      </button>
    </div>
  );
};

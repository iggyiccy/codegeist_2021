import ForgeUI, { render, Fragment, Macro, Image } from "@forge/ui";

const App = () => {
  return (
    <Fragment>
      <Image
        src="https://random-memer.herokuapp.com/"
        alt="Please refresh the app if the meme doesn't show up."
      />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);

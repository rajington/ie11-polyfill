import Foo from "@peloton/foo";

const Home = () => {
  console.log(
    Object.fromEntries([
      ["foo", 2],
      ["bar", 3],
    ])
  );

  return (
    <div>
      <Foo />
    </div>
  );
};

export default Home;

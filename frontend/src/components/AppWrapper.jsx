import Header from "./Header";

const AppWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppWrapper;

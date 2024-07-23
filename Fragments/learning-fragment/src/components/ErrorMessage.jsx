const ErrorMessage = ({ items }) => {
  let emptyMessage = items.length === 0 ? <h3>I'm still hungry</h3> : null;

  return <>{emptyMessage}</>;
};

export default ErrorMessage;

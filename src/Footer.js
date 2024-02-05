function Footer() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const isOpen = hours >= 12 && hours <= 22;
  return (
    <div className="footer">
      <h3>
        Current Time: {hours}:{minutes}
      </h3>
      <br />
      {isOpen ? (
        <h3 className="open-text">WE ARE OPEN!</h3>
      ) : (
        <h3 className="closed-text">WE ARE CLOSED!</h3>
      )}
    </div>
  );
}

export default Footer;

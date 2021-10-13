import Close from "../images/icon-close.svg";

const MobMenu = ({ setIsOpen }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  const closeWithAnimation = (e) => {
    e.currentTarget.parentElement.classList.add("close-modal");
    console.log(e.currentTarget.parentElement);
    setIsOpen(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <ul>
        <img src={Close} alt="" onClick={closeWithAnimation} />
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Man</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobMenu;

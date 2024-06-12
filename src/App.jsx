import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleModel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasError(false);

    let length = phone.length;
    let dob = new Date(date);
    const now = new Date();

    if (length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
      setHasError(true);
    }

    if (dob > now) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      setHasError(true);
    }
    setTimeout(() => {
      if (!hasError) {
        setEmail("");
        setDate("");
        setUsername("");
        setPhone("");
      }
    }, 0);
  };

  return (
    <>
      {isModalOpen && <div className="wrapperForm" onClick={handleModel}></div>}
      <div className="wrapper">
        <div className="container">
          <h1>User Details Modal</h1>
          <button className="openFormBtn" onClick={handleModel}>
            Open Form
          </button>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="modal">
            <form
              action="submit"
              className="modal-content"
              onSubmit={handleSubmit}
            >
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone" required>
                Phone Number:
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default App;

import axios from "axios";
import { useState } from "react";
const BookingForm = () => {

  //form input information state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false); //loading state
  const [error, setError] = useState(null); //error state

  const handleSubmit = async (e) => {
    e.preventDefaul()
    setLoading(true);
    setError(null)

    try{
      const respose = await axios.post("/api/booking", formData)
      alert("Booking confirmed!");
    }catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };



  return(
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input type="email" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
  
        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
  
        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
  
        {/* Submit Button */}
        <button type="submit" disabled={loading} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
         {loading ? "Procession..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
  
  export default BookingForm;
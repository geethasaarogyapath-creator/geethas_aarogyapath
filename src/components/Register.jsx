import React, { useState } from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner'
import Swal from 'sweetalert2'


const Register = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [address, setAddress] = useState("")
  const [profession, setProfession] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  const handlereg = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(phone.length!==10){
      Swal.fire({
          icon: "error",
          title: "Phone Number should be 10 digits",
          text: "Please enter 10 Digit Phone Number",
          confirmButtonColor: "#dc2626"
        })
      setLoading(false)
      return
    }

    try {
      const response = await fetch("https://aarogyapath.onrender.com/client/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          age,
          gender,
          isvisited: false,
          height,
          weight,
          proffession: profession,
          address
        })
      })

      const res = await response.json()

      if (response.ok && res=="Registered Successfully") {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: res,
          confirmButtonColor: "#2563eb",
          background: "#f9fafb",
          color: "#111827"
        })
        setName("")
        setAddress("")
        setAge("")
        setEmail("")
        setGender("")
        setHeight("")
        setWeight("")
        setPhone("")
        setProfession("")
      } else if(response.ok && res=="Already Registered"){
        Swal.fire({
          icon: "error",
          title: "Already Registered with this email",
          confirmButtonColor: "#dc2626"
        })
      }else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Please try again",
          confirmButtonColor: "#dc2626"
        })
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong",
        confirmButtonColor: "#dc2626"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="h-[calc(100vh)] bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            User Registration
          </h2>

          {loading ? <Spinner /> : (

            <form onSubmit={handlereg} className="flex flex-col gap-4">

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text" placeholder="Full Name" value={name}
                onChange={e => setName(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="number" placeholder="Age" value={age}
                onChange={e => setAge(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="number" placeholder="Height (feets)" value={height}
                onChange={e => setHeight(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="number" placeholder="Weight (kg)" value={weight}
                onChange={e => setWeight(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text" placeholder="Address" value={address}
                onChange={e => setAddress(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text" placeholder="Profession" value={profession}
                onChange={e => setProfession(e.target.value)} required />

              <select className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                value={gender} onChange={e => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="email" placeholder="Email" value={email}
                onChange={e => setEmail(e.target.value)} required />

              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="tel" placeholder="Phone Number" value={phone}
                onChange={e => setPhone(e.target.value)} required />

              <button className="mt-4 h-11 bg-blue-600 text-white rounded-lg font-semibold 
                                 hover:bg-blue-700 hover:shadow-lg transition-all cursor-pointer">
                REGISTER
              </button>

            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Register

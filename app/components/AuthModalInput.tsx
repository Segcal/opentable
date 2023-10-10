import React from 'react'

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean
}

export default function AuthModalInput({ inputs, handleChangeInput, isSignin }: Props) {
  return (
    <div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="rounded w-[49%] border p-2 py-3"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="rounded w-[49%] border p-2 py-3"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="rounded w-full border p-2 py-3"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="rounded w-[49%] border p-2 py-3"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="rounded w-[49%] border p-2 py-3"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="rounded w-full border p-2 py-3"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
}

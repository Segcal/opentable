"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInput from "./AuthModalInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignin ? signinContent : signupContent;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "" 
  })

  const [disabled, setDisabled] = useState(true) 
  useEffect(() => {
    if(isSignin){
      if(inputs.password && inputs.email){
        return setDisabled(false)
      }
    } else {
      if(inputs.firstName && inputs.lastName && inputs.email && inputs.phone && inputs.city && inputs.password)
      return setDisabled(false)
    }
    setDisabled(true)
  }, [inputs])

  return (
    <div>
      <button
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[600px]">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {renderContent("Sign in", "Create Account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {renderContent(
                  "Log Into Your Account",
                  "Create Your OpenTable Account"
                )}
              </h2>
              <AuthModalInput
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSignin={isSignin}
              />
              <button
                className="uppercase bg-red-600 w-full text-white p-3 text-sm rounded mb-5 disabled:bg-gray-400"
                disabled={disabled}
              >
                {renderContent("Sign in", "Create Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

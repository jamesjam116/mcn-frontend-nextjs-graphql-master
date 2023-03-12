import type { NextPage } from "next";
import { ContentCard } from "../components/features/ContentCard";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const RegisterPage: NextPage = () => {
    const validator = require('validator');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidator, setEmailValidator] = useState(false)
    const [passwordValidator, setPasswordValidator] = useState(false)

    const [errorEmailText, setErrorEmailText] = useState("");
    const [errorPasswordText, setErrorPasswordText] = useState("");
    const handleValue = (e: any) => {
        const emailString = e.target.value;
        setEmail(emailString);
        setEmailValidator(!validator.isEmail(emailString))
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }
    return (
        <div className="main display-center">
            <div className="sign-card">
                <ContentCard>
                    <h3>Create an account</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="form-control">
                        <TextField
                            fullWidth
                            error={emailValidator}
                            helperText={errorEmailText}
                            value={email}
                            type="email"
                            onChange={(e) => handleValue(e)}
                            label="Email*"
                        />
                    </div>
                    <div className="form-control">
                        <TextField
                            fullWidth
                            error={passwordValidator}
                            helperText={errorPasswordText}
                            type="password"
                            value={password}
                            onChange={(e) => handlePassword(e)}
                            label="Password*"
                        />
                    </div>
                    <div className="card-center display-center">
                        <Link href="/signin">
                            <a>Do you have an account? Signin</a>
                        </Link>
                    </div>
                    <div className="form-control">
                        <Button
                            variant="contained"
                            fullWidth
                        >Register</Button>
                    </div>
                </ContentCard>
            </div>
        </div>
    )
}

export default RegisterPage
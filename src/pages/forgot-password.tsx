import type { NextPage } from "next";
import { ContentCard } from "../components/features/ContentCard";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const ForgotPasswordPage: NextPage = () => {
    const validator = require('validator');
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState(false)

    const [errorEmailText, setErrorEmailText] = useState("");
    const handleValue = (e: any) => {
        const emailString = e.target.value;
        setEmail(emailString);
        setEmailValidator(!validator.isEmail(emailString))
    }
    return (
        <div className="main display-center">
            <div className="sign-card">
                <ContentCard>
                    <h3>Forgot password</h3>
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
                    <div className="card-splite">
                        <Link href="/signin">
                            <a>Sign in</a>
                        </Link>
                        <Link href="/register">
                            <a>Create an account</a>
                        </Link>
                    </div>
                    <div className="form-control">
                        <Button
                            variant="contained"
                            fullWidth
                        >Signin</Button>
                    </div>
                </ContentCard>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
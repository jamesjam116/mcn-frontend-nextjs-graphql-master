import Link from "next/link";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <Image
                                    width={38}
                                    height={38}
                                    src="/logo.png"
                                    alt="MWS logo"
                                />
                                <span className="logo-text">MWS</span>
                            </a>
                        </Link>
                    </div>
                    <div className="header-action">
                        <WalletModalProvider>
                            <WalletMultiButton />
                        </WalletModalProvider>
                        <Button variant="contained" onClick={() => router.push("/signin")}>
                            signin
                        </Button>
                        <Button variant="contained" color="secondary">
                            register
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
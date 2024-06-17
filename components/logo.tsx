import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src="/LEGO.svg" alt="Trello-Clone Logo" width={40} height={40} />
                <p className="text-xl text-neutral-500">
                    Trello-Clone
                </p>
            </div>
        </Link>
    );
}


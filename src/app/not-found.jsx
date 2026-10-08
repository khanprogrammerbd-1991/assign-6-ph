import Link from "next/link";


const NotFound = () => {
    return (
        <div>
            <h1 className="font-bold text-1000">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <Link href="/">
                <p>Back to Home</p>
            </Link>
        </div>
    );
};

export default NotFound;
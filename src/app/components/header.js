import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className="flex">
            <h2 className="text-4xl ml-2 mt-2">//devbenji.</h2>
            <Image
                src="/images/circle_logo.gif"
                alt="Logo"
                width={50}
                height={40}
                className="ml-1 mt-1"
            />
            </div>
            <div className="mt-2 w-full border-solid border-b-white border-b-2"></div>
        </div>
    );
};

export default Header;
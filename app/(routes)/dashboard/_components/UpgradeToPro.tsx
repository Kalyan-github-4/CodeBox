
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const UpgradeToPro = () => {
    return (
        <div className="flex flex-col items-center px-4 py-5 border-4 rounded-2xl mt-8 w-full">
            <Image src={'/logo.png'} alt="logo" width={70} height={70} />
            <h2 className="font-game text-3xl">Upgrade To Pro</h2>
            <p className="font-game text-gray-500 text-xl">Join Pro Membership & Get All Course Access</p>

            <Link href={"/pricing"} className="w-full">

                <Button variant={'pixel'} className="rounded-lg mt-2">Upgrade</Button>
            </Link>
        </div>
    )
}

export default UpgradeToPro
import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { BiSolidCopyAlt } from "react-icons/bi";


export default function Token({address="0x12347343t4284y28y42995927599bbfjhf282852875925295729y87gg...567890"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token rounded border border-black relative z-[1] flex items-center justify-between">
            <p className="!mb-0 font-bold">{token}</p>
            <button onClick={() => copyHandle()} className="bg-transparent p-0 border-0 flex items-center gap-1 md:gap-2">
                {copied ? <LuCopyCheck /> :  <BiSolidCopyAlt /> } copy
            </button>
        </div>
    )
}

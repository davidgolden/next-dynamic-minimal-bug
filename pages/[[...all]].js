import dynamic from "next/dynamic";

const HelloWorld = dynamic(() => import("../HelloWorld"));

export default function Main() {
    return <HelloWorld />
}
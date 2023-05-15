import Link from "next/link";

import fs from 'fs';

export default function Contact(){
    return (
        <div>
            <h1>contact</h1>
            <Link href="/">home</Link>
            <Link href={`/blog/asdfsadfasdf`}>post</Link>
        </div>
    )
}
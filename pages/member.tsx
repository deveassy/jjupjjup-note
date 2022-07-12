import Link from "next/link";

function Member() {
  return (
    <div>
      <h1>Member page</h1>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  );
}

export default Member;

import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h2>/reproduction</h2>
      <p>
        The following links are intercepted by the catchall handler
        (.)[...catchall]
      </p>
      <p>
        Note that when the link to a path with more than one path segment is
        clicked, the page is intercepted, but the segments are all concatenated
        into a single string, instead of concatenated as strings in the array of
        strings.
      </p>

      <ul>
        <li>
          <Link href="/reproduction/single">/reproduction/single</Link>
        </li>
        <li>
          <Link href="/reproduction/double/double">
            /reproduction/double/double
          </Link>
        </li>
      </ul>
    </div>
  );
}

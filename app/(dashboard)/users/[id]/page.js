export default async function UsersIdPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    { cache: "no-store" }
  );
  const user = await response.json();
  return (
    <>
<div className="w-full overflow-x-auto rounded-box border border-base-content/20 bg-base-200">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th className="hidden sm:table-cell">company</th>
              <th className="hidden sm:table-cell">phone</th>
              <th className="hidden sm:table-cell">website</th>
 
            </tr>
          </thead>
          <tbody>
              <tr className="hover:bg-base-100">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="hidden sm:table-cell">{user.company.name}</td>
                <td className="hidden sm:table-cell">{user.phone}</td>
                <td className="hidden sm:table-cell">{user.website}</td>
                    </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

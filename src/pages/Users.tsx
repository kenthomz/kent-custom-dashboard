export default function Users() {
  const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Maria" },
  ];

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

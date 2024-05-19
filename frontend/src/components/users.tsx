
import React, { useEffect, useState } from 'react';


export default function App() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>User List Hello I am here </h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}



'use client'
import { useState, useEffect, FormEvent } from 'react'

interface User {
    id: number
    name: string
    phoneNumber: string
}

export default function UserForm() {
    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [users, setUsers] = useState<User[]>([])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await fetch('/api/Trainer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phoneNumber }),
        })

        if (response.ok) {
            setName('')
            setPhoneNumber('')
            fetchUsers()
        }
    }

    const fetchUsers = async () => {
        const response = await fetch('/api/Trainer')
        if (response.ok) {
            const data: User[] = await response.json()
            setUsers(data)
        }
    }

    const handleDelete = async (id: number) => {
        const response = await fetch(`/api/Trainer/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            fetchUsers()
            alert("User Deleted Successfully")
        } else {
            alert('Failed to delete user')
        }
    }

    const handleUpdate = async (user: User) => {
        const newName = prompt("Enter new name:", user.name)
        const newPhone = prompt("Enter new phone number:", user.phoneNumber)

        if (!newName || !newPhone) {
            alert("Update cancelled or invalid input.")
            return
        }

        const response = await fetch(`/api/Trainer/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName, phoneNumber: newPhone }),
        })

        if (response.ok) {
            fetchUsers()
            alert("User Updated Successfully")
        } else {
            alert('Failed to update user')
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Add New Trainer</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Trainer
                </button>
            </form>

            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">User List:</h3>
                {users.length === 0 ? (
                    <p className="text-gray-500">No users found.</p>
                ) : (
                    <ul className="space-y-2">
                        {users.map((user) => (
                            <li key={user.id} className="flex justify-between items-center border-b pb-1 text-gray-800">
                                <div>
                                    <span className="font-medium">{user.name}</span> - <span>{user.phoneNumber}</span>
                                </div>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-600 text-white text-sm px-2 py-1 rounded hover:bg-red-700 transition"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(user)}
                                        className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-700 transition"
                                    >
                                        Update
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

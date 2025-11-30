"use client";
import React, { useState, useTransition, useEffect } from "react";
import { getUsers } from "@/actions/usersAction";
import { IUser } from "@/utils/types";
import Link from "next/link";

const UserPage = () => {
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<IUser[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleFilter = (data: string) => {
        setQuery(data);

        startTransition(() => {
            setResults(users.filter((el) => el.name.includes(data)));
        });
    };

    return (
        <div className="flex flex-wrap flex-col gap-3 m-3">
            <input
                type="text"
                value={query}
                onChange={(e) => handleFilter(e.target.value)}
                className="border px-3 py-2"
            />
            {isPending && <p>Loading...</p>}
            {results.map((user) => (
                <Link
                    key={user.id}
                    href={`/users/${user.id}`}
                    className="hover:text-blue-600 transition duration-300"
                >
                    {user.id}. {user.name}
                </Link>
            ))}
        </div>
    );
};

export default UserPage;

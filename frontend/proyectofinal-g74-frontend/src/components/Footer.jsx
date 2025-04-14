import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-100 text-white p-4 shadow-md mt-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold">
                    ZoeChalupas
                    </Link>
                </div>

            </div>
        </footer>
    );
}
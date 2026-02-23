"use client";

import { useState } from "react";
import Link from "next/link";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import "./admin.css";

export default function AdminPage() {
    const [date, setDate] = useState<Date | undefined>(new Date("2026-03-01T10:30:00Z"));
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<{ type: "success" | "error" | "loading" | null; message: string }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date) return;

        setStatus({ type: "loading", message: "Updating..." });

        try {
            const formattedDate = date.toISOString();

            const res = await fetch("/api/admin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ date: formattedDate, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: "success", message: `Date updated successfully to ${date.toLocaleString()} ` });
            } else {
                setStatus({ type: "error", message: data.error || "Failed to update" });
            }
        } catch (e: any) {
            setStatus({ type: "error", message: e.message || "An error occurred" });
        }
    };

    return (
        <div className="admin">
            <Link href="/" className="admin__back">
                ← Back to Homepage
            </Link>
            <div className="admin__card">
                <div className="admin__header">
                    <h1 className="admin__title">Webinar Settings</h1>
                    <p className="admin__description">
                        Update the date and time for your next free session.
                    </p>
                </div>
                <div className="admin__body">
                    <form onSubmit={handleSubmit} className="admin__form">
                        <div className="admin__field">
                            <label className="admin__label">
                                Next Webinar Date &amp; Time
                            </label>
                            <DateTimePicker date={date} setDate={setDate} />
                            <p className="admin__hint">
                                The time you select is local and will be converted to UTC for users worldwide.
                            </p>
                        </div>

                        <div className="admin__field">
                            <label htmlFor="password" className="admin__label">
                                Admin Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter password..."
                                className="admin__input"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.type === "loading" || !date || !password}
                            className="admin__submit"
                        >
                            {status.type === "loading" ? "Saving Changes..." : "Update Date"}
                        </button>

                        {status.message && (
                            <div
                                className={`admin__status ${status.type === "error"
                                    ? "admin__status--error"
                                    : status.type === "success"
                                        ? "admin__status--success"
                                        : "admin__status--loading"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

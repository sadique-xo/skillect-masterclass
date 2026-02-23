"use client";

import { useState } from "react";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
    // Use a Date object here instead of a raw string
    const [date, setDate] = useState<Date | undefined>(new Date("2026-03-01T10:30:00Z"));
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<{ type: "success" | "error" | "loading" | null; message: string }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date) return;

        setStatus({ type: "loading", message: "Updating..." });

        try {
            // The date state is a Date object, meaning we can natively use it
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-4">
            <Card className="w-full max-w-md shadow-lg border-muted">
                <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold">Webinar Settings</CardTitle>
                    <CardDescription>
                        Update the date and time for your next free session.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="date-picker" className="font-semibold text-foreground">
                                Next Webinar Date & Time
                            </Label>
                            <DateTimePicker date={date} setDate={setDate} />
                            <p className="text-xs text-muted-foreground mt-1">
                                The time you select is local and will be converted to UTC for users worldwide.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password" className="font-semibold text-foreground">
                                Admin Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter password..."
                                className="w-full"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={status.type === "loading" || !date || !password}
                            className="w-full mt-2 font-semibold"
                        >
                            {status.type === "loading" ? "Saving Changes..." : "Update Date"}
                        </Button>

                        {status.message && (
                            <div
                                className={`p-3 mt-2 text-sm text-center rounded-md ${status.type === "error"
                                    ? "bg-red-50 text-red-700 border border-red-200"
                                    : status.type === "success"
                                        ? "bg-green-50 text-green-700 border border-green-200"
                                        : "bg-gray-50 text-gray-700"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

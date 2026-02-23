"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface DateTimePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);

    // Derive hour/minute/period from date
    const hours24 = date ? date.getHours() : 0;
    const hour12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
    const minute = date ? date.getMinutes() : 0;
    const period = hours24 >= 12 ? "PM" : "AM";

    React.useEffect(() => {
        setSelectedDate(date);
    }, [date]);

    const handleDateSelect = (newDate: Date | undefined) => {
        if (newDate && date) {
            // Preserve existing time when selecting a new date
            newDate.setHours(date.getHours(), date.getMinutes());
        }
        setSelectedDate(newDate);
        setDate(newDate);
    };

    const updateTime = (newHour12: number, newMinute: number, newPeriod: string) => {
        const base = selectedDate ? new Date(selectedDate) : new Date();
        let h24 = newHour12;
        if (newPeriod === "AM") {
            h24 = newHour12 === 12 ? 0 : newHour12;
        } else {
            h24 = newHour12 === 12 ? 12 : newHour12 + 12;
        }
        base.setHours(h24, newMinute);
        setSelectedDate(base);
        setDate(base);
    };

    const handleHourChange = (val: string) => {
        updateTime(parseInt(val, 10), minute, period);
    };

    const handleMinuteChange = (val: string) => {
        updateTime(hour12, parseInt(val, 10), period);
    };

    const handlePeriodChange = (val: string) => {
        updateTime(hour12, minute, val);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className={`admin__date-trigger${!date ? " admin__date-trigger--empty" : ""}`}
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP h:mm a") : <span>Pick a date and time</span>}
                </button>
            </PopoverTrigger>
            <PopoverContent className="admin__popover-content" align="start">
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    initialFocus
                />
                <div className="admin__time-section">
                    <div className="admin__time-label">
                        <Clock />
                        <span>Time</span>
                    </div>
                    <div className="admin__time-selects">
                        <Select value={String(hour12)} onValueChange={handleHourChange}>
                            <SelectTrigger className="admin__time-select">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                                    <SelectItem key={h} value={String(h)}>
                                        {String(h).padStart(2, "0")}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <span className="admin__time-colon">:</span>

                        <Select value={String(minute)} onValueChange={handleMinuteChange}>
                            <SelectTrigger className="admin__time-select">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i * 5).map((m) => (
                                    <SelectItem key={m} value={String(m)}>
                                        {String(m).padStart(2, "0")}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={period} onValueChange={handlePeriodChange}>
                            <SelectTrigger className="admin__time-select admin__time-select--period">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="AM">AM</SelectItem>
                                <SelectItem value="PM">PM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

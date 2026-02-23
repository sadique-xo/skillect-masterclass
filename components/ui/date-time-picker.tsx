"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface DateTimePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);
    const [timeValue, setTimeValue] = React.useState<string>(
        date ? format(date, "HH:mm") : "00:00"
    );

    React.useEffect(() => {
        setSelectedDate(date);
        if (date) {
            setTimeValue(format(date, "HH:mm"));
        }
    }, [date]);

    const handleDateSelect = (newDate: Date | undefined) => {
        if (newDate) {
            const [hours, minutes] = timeValue.split(":");
            newDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
        }
        setSelectedDate(newDate);
        setDate(newDate);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = e.target.value;
        setTimeValue(newTime);

        if (selectedDate) {
            const [hours, minutes] = newTime.split(":");
            const updatedDate = new Date(selectedDate);
            updatedDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
            setSelectedDate(updatedDate);
            setDate(updatedDate);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP p") : <span>Pick a date and time</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-border" align="start">
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    initialFocus
                />
                <div className="p-3 border-t border-border flex items-center justify-between gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                    <Input
                        type="time"
                        value={timeValue}
                        onChange={handleTimeChange}
                        className="w-full text-center"
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}

import React, { useState, useEffect } from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function AnnouncementBar() {
    const { config } = useLandingPageController();
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        if (!config?.announcementBar?.enabled || !config?.announcementBar?.messages) return;

        const messages = config.announcementBar.messages;
        if (messages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, config.announcementBar.rotationInterval || 3000);

        return () => clearInterval(interval);
    }, [config]);

    if (!config?.announcementBar?.enabled || !config?.announcementBar?.messages?.length) {
        return null;
    }

    const { backgroundColor, textColor, messages } = config.announcementBar;
    const currentMessage = messages[currentMessageIndex];

    return (
        <div
            className="w-full py-2 text-center font-medium text-sm"
            style={{
                backgroundColor: backgroundColor || '#059669',
                color: textColor || '#ffffff'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <span className="animate-fade-in-up">
                        {currentMessage}
                    </span>
                </div>
            </div>
        </div>
    );
}
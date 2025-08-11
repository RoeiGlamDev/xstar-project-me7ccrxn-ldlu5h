import { format } from 'date-fns';

/
 * Utility functions for the AI application.
 * This module includes various helper functions specifically tailored for VidNexus,
 * an AI-driven platform for creating videos.
 * 
 * @module utils
 */

interface Video {
    id: string;
    title: string;
    description: string;
    duration: number; // duration in seconds
    createdAt: Date;
}

/
 * A utility function to generate a unique identifier for videos.
 * 
 * @returns {string} A unique identifier for a video.
 */
export function generateVideoId(): string {
    return vid-${Date.now()}-${Math.random().toString(36).substr(2, 9)};
}

/
 * Formats the video duration from seconds to a human-readable format.
 * 
 * @param {number} seconds - The duration in seconds.
 * @returns {string} Formatted duration string (e.g., "2 minutes 30 seconds").
 */
export function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return ${minutes} minute${minutes !== 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''};
}

/
 * Formats the creation date of a video into a readable string.
 * 
 * @param {Date} date - The date when the video was created.
 * @returns {string} Formatted date string (e.g., "January 1, 2023").
 */
export function formatCreationDate(date: Date): string {
    return format(date, 'MMMM d, yyyy');
}

/
 * Checks if a video object is valid according to the business logic of AI.
 * 
 * @param {Video} video - The video object to validate.
 * @returns {boolean} True if the video is valid, false otherwise.
 */
export function isValidVideo(video: Video): boolean {
    return (
        typeof video.id === 'string' &&
        video.id.startsWith('vid-') &&
        video.title.length > 0 &&
        video.description.length > 0 &&
        video.duration > 0
    );
}

/
 * A function to log the details of a new video.
 * This is part of the technology business logic for VidNexus.
 * 
 * @param {Video} video - The video object to log.
 */
export function logVideoDetails(video: Video): void {
    if (isValidVideo(video)) {
        console.log(New Video Created: 
                     ID: ${video.id}, 
                     Title: ${video.title}, 
                     Duration: ${formatDuration(video.duration)}, 
                     Created At: ${formatCreationDate(video.createdAt)});
    } else {
        console.error('Invalid video object:', video);
    }
}
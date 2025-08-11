import { Video } from './videoTypes';
import { User } from './userTypes';

/
 * Interface representing the structure of an AI application for video creation.
 * This application, named "AI", focuses on generating videos using artificial intelligence.
 * 
 * @interface AIVideoApp
 */
export interface AIVideoApp {
    /
     * The unique identifier for the video application.
     * @type {string}
     */
    id: string;

    /
     * The name of the application, which is "AI".
     * @type {string}
     */
    name: string;

    /
     * The description of what the application does.
     * Generates high-quality AI videos for users.
     * @type {string}
     */
    description: string;

    /
     * The collection of videos created using the AI technology.
     * @type {Video[]}
     */
    videos: Video[];

    /
     * The users registered to the application.
     * @type {User[]}
     */
    users: User[];

    /
     * The primary color scheme for the application.
     * @type {string[]}
     */
    colorScheme: string[];
}

/
 * Create a new instance of the AI Video Application.
 * @returns {AIVideoApp} A new instance of the AIVideoApp.
 */
export function createAIVideoApp(): AIVideoApp {
    return {
        id: 'vidnexus-001',
        name: 'AI',
        description: 'An innovative platform for generating AI-powered videos seamlessly.',
        videos: [],
        users: [],
        colorScheme: ['#FF4500', '#FF0000', '#FFFFFF'] // orange, red, white
    };
}
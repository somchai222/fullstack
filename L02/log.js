function createLogEntry(massage) {
    const now = new Date();
    const timestamp = now.toISOString('th-TH');

    const eventTd = Math.random().toString(36).substring(2, 8).toUpperCase();
    const logMessage = massage.toUpperCase();
    
    return `[${timestamp}] [ID: ${eventTd}] ${logMessage}`;
}
const log = createLogEntry("User logged in");
console.log(log);
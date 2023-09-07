 document.addEventListener('DOMContentLoaded', function() {
        // Get the current date and time
        const now = new Date();

        // Update the current day of the week element
        const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        dayOfWeekElement.textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);

        // Update the current UTC time element
        const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
        utcTimeElement.textContent = now.getTime();
        
    });

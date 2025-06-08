# UserFormDemo - User Profile Management SPA

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Form Management**: React Hook Form + Zod validation
- **UI Components**: IBM Carbon Design System
- **Styling**: SASS/SCSS
- **Image Processing**: browser-image-compression
- **File Upload**: react-dropzone
- **State Management**: React Context + Custom Hooks

# Implementation Comments - UserFormDemo

## What assumptions i made

**Users and age limits**
i assumed users would be at least 13 years old. That's why the birthday validation checks for this minimum age.

**No backend available**
Since there's no backend, i stored everything in sessionStorage. This means data stays while the browser tab is open but gets deleted when you close it. i figured this was better than localStorage because form drafts shouldn't stick around forever.

**Image storage**
i used base64 encoding for images. This isn't great for production since it makes files bigger, but it works without a server. The images get compressed to keep the size reasonable.

**Form behavior**
i assumed users want their form data saved automatically as they type. So i added auto-save with a 1-second delay.

## Why i chose specific techniques

**React Hook Form + Zod**
These work really well together. React Hook Form doesn't re-render the whole form when one field changes, which makes it fast. Zod gives you type safety and handles validation errors nicely.

**Context API**
Good for sharing form state between components without passing props everywhere. The form data needs to be available in multiple places.

Redux as an alternative would be overkill for this. useState in the main component would work but requires prop drilling.

## Technical decisions explained

**Dependency injection pattern**
i made the form submission hook accept dependencies instead of importing contexts directly. This makes it much easier to test and reuse.

**Custom SASS for image upload**
The task required at least one component without frameworks. i chose the image upload because it needed custom drag-and-drop styling anyway. SASS makes it easier to organize the styles with nesting and variables.

**Error boundaries**
Added these to catch React errors gracefully instead of showing a white screen.

**Debounced auto-save**
Waits 1 second after the user stops typing before saving. Prevents too many storage writes.

## Alternative solutions i considered

**State management**
- Zustand: simpler than Redux but Context API was enough
- Redux Toolkit: too much setup for this size project
- Just useState: would need lots of prop passing

**Styling approaches**
- Tailwind CSS: utility-first but can lead to cluttered JSX
- styled-components: good but adds runtime overhead
- CSS modules: would work but more setup
- Regular CSS: harder to maintain for responsive design

## Future backend integration
The current structure would work well with a real API. You'd just need to:
- Replace sessionStorage calls with API calls
- Add proper error handling for network issues
- Handle loading states for API requests
- Add authentication if needed

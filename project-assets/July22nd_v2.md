A Methodical Journey Through the CORS Maze
Date: 22 July 2025

The Objective
The plan for the day was to execute the first de-risking spike: prove that my static frontend, running on a local machine, could fetch and render content from a remote, headless WordPress CMS. This was a critical test of the foundational architecture for all future dynamic content.

The Initial Failure: "Failed to Fetch"
The initial implementation failed immediately. The browser console reported a generic "Failed to fetch" error. This triggered a methodical, multi-stage diagnostic process to isolate the root cause.

Stage 1: Diagnosing the Origin

Symptom: The detailed console error showed a CORS policy violation, blocking a request from origin 'null'.

Diagnosis: Opening the index.html file directly from the local file system (file://) creates a restrictive security context. Browsers block API requests from this null origin.

Solution: A local development server was required. live-server was installed as a project dependency and integrated into the workflow via an npm script. This provided a standard http://localhost origin, resolving the initial CORS issue.

Stage 2: Diagnosing the Preflight 401

Symptom: With the live-server running, the error changed. The browser's Network tab now showed a 401 Unauthorized error on a "preflight" OPTIONS request.

Diagnosis: The server-level password protection (SiteGround's "Protected URLs") was rejecting the browser's security handshake before the actual, authenticated request could be sent.

Hypothesis: The issue was a server configuration problem. Multiple attempts were made to create an exception for the preflight request using .htaccess rules. These attempts failed, indicating that a higher-level security feature was taking precedence.

Stage 3: The Definitive Diagnostic Test

Hypothesis: The SiteGround "Protected URLs" feature was the sole remaining variable and the likely root cause.

The Test: A controlled experiment was conducted.

The server-level password protection was temporarily disabled on the dev subdomain.

The corresponding Authorization header was removed from the frontend fetch request.

The Result: The API call succeeded. The content was fetched and rendered correctly.

The Takeaway: A Foundational Lesson
The diagnostic process, though complex, was a perfect execution of the "Foundation First" principle. It methodically isolated and eliminated variables until the true root cause was identified.

The key learning is foundational: the choice of security model is an architectural decision, not a configuration tweak. The server-level "Protected URLs" feature, while useful for simple privacy, is the wrong tool for securing an API endpoint. It is fundamentally incompatible with the browser's CORS security model for authenticated requests.

The proof of concept is a success. The next step, when building the production version of this feature, will be to implement the correct security model: WordPress Application Passwords, which are designed specifically for this headless architecture.
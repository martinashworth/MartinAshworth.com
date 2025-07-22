###From Zero to Deployed: A Strategic Checkpoint (v7)
**Date:** 22 July 2025

Where I Am
The foundational workflow is stable, portable, and professional. The immediate next step was to de-risk the integration of a headless WordPress instance. However, new research has expanded the project's potential scope, introducing both new opportunities and new technical unknowns.

The project is no longer just a static site with a blog. The new target architecture is a hybrid: a static site that can dynamically pull content from a headless CMS and also host interactive, JavaScript-driven components (e.g., contact forms, maps, search functionality).

This expanded scope requires a more comprehensive de-risking phase before any final design or development work can begin.

The Expanded Technical Stack
The list of technologies to evaluate and prove has grown:

Headless CMS: The initial choice was WordPress. Alternatives like Contentful, Sanity, and Strapi are now under consideration. The core capability to be proven is fetching structured content (not just posts) via an API.

JavaScript Libraries: To build the desired interactive features, a JavaScript library like React or Vue.js is required. The key capability to be proven is incremental integration—the ability to add a component built with one of these libraries to the existing static HTML site without a full rewrite.

The Revised Strategic Plan: A Multi-Phase De-Risking Approach
The plan is now a series of targeted, sequential spikes, each designed to eliminate a specific technical unknown. All work will be conducted on dedicated Git branches to ensure the main branch remains stable.

Immediate Action: Foundational Workflow

This is complete. A stable, portable Git repository and local development environment are in place.

De-Risking Spike #1: Headless CMS Connection (The Original Goal)

Objective: Prove the ability to fetch and display content from a headless CMS.

Action: On a new Git branch (feature/cms-poc), use JavaScript's fetch API to pull the sample post from the dev.martinashworth.com WordPress instance and display its title and content on the index.html page.

Outcome: This will confirm the viability of the core headless architecture.

De-Risking Spike #2: Incremental JavaScript Library Integration

Objective: Prove the ability to add a single, interactive component built with a modern JavaScript library to the existing static site.

Action: On a new Git branch (feature/react-poc), follow a tutorial to add a simple, self-contained React component (e.g., a basic "like" button) to a section of the index.html page.

Outcome: This will confirm that the site can be enhanced with modern interactivity without requiring a full rebuild, validating the incremental adoption strategy.

Future Phase: Strategic Definition & Refinement

With all major technical risks eliminated, I can proceed with the formal strategic and design phase.

Define the UVP: Finalize the list of service offerings.

Select Final Tooling: Based on the POCs, make a final decision on the headless CMS and JavaScript library for the project.

Formal Design: Begin the design process in Figma, now with full confidence in the capabilities of the chosen technical stack.

This revised, multi-spike plan is the only one that aligns with the "Foundation First" principle in the face of this expanded scope. It ensures that every component of the final architecture is understood and validated before any significant investment is made in the final design and build.
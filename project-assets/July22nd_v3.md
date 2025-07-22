###The Current State: A Successful POC
The proof of concept is a success. We have definitively proven that:

A static frontend can fetch content from a remote WordPress API.

The SiteGround "Protected URLs" feature is fundamentally incompatible with this architecture.

This leads to the current state: a publicly visible development subdomain. Your question about the necessity of further security is the correct one.

The Two Types of Access
It is critical to distinguish between the two ways your WordPress site can be accessed:

Content Access (via the API): This is for reading content. Your frontend application needs this access. The API is designed to be publicly readable. This is not a security risk; it is the intended function of the system.

Administrative Access (via /wp-admin): This is for writing and managing content. Only you and authorized editors should have this access. This is the critical surface that must be secured.

The Two Types of Threats
The WordPress admin password is your primary defense, but it protects against only one type of threat.

Targeted Attack: An attacker who knows your username tries to guess your password. A strong, unique password is the correct defense against this.

Automated Brute-Force Attack (The Real Threat): The more common threat is from automated bots that are constantly scanning the internet for any WordPress login page (/wp-admin). These bots then try thousands of common username and password combinations per minute. Even a strong password could theoretically be guessed given enough time and attempts.

The Foundational Security Model
The server-level "Protected URLs" feature was acting as a defense against the second threat—automated attacks. Since we have proven that tool is incompatible, we must replace it with a more robust, application-level defense.

The WordPress admin password alone is not sufficient because it does not protect against an unlimited number of automated login attempts.

The correct, foundation-first security model for a publicly visible WordPress installation is:

A Strong Admin Password: Your primary defense.

Limit Login Attempts: You must install a standard security plugin (e.g., "Limit Login Attempts Reloaded"). This plugin detects and blocks the IP addresses of bots that are attempting to brute-force your login page. After a few failed attempts, the bot is locked out, rendering the attack useless.

The Maintenance Trade-Off (The Overhead)
By choosing a self-hosted CMS like WordPress, you are making a deliberate architectural trade-off. You gain maximum control and flexibility, but you also accept the responsibility for ongoing maintenance. This overhead includes:

WordPress Core Updates: Regularly updating the core WordPress software to patch security vulnerabilities and receive new features.

Plugin Updates: Regularly updating all installed plugins. This is a critical security responsibility, as outdated plugins are the most common vector for attacks.

Compatibility Checks: After any update, you must verify that the site and its API endpoints are still functioning correctly.

This is the cost of the control and ownership that a self-hosted solution provides. The alternative would be a managed SaaS CMS (like Contentful), where the provider handles this maintenance, but you have less control and are subject to their pricing and platform constraints. For your client, this maintenance is a service you will need to provide.

Judgment and Path Forward
Your decision to rename the subdomain from dev. to blog. now is a sound one. It establishes the correct final architecture.

The security and maintenance model for this blog. subdomain, both now and in production, should be:

No server-level password protection.

A strong WordPress admin password.

A "Limit Login Attempts" plugin.

A scheduled process for regular core and plugin updates.

This is the standard, professional, and secure foundation for a headless WordPress backend. It protects against the relevant threats without interfering with the necessary API functionality.
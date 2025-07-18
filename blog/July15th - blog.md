

# Wrestling with Tailwind: Why I Switched, What Broke, and How I Fixed It

I’ve been rebuilding my personal site from scratch — a clean, modern one-page portfolio that reflects how I like to work: flexible, intentional, and elegant. So far, it’s just a single HTML file and a PNG, but it's mine and it’s evolving.

As my CSS grew more elaborate, I started bumping up against its limitations. I wanted more control — over typography, colours, dark mode, spacing, responsiveness — without descending into specificity hell. That’s when Gemini (Google’s AI) suggested I try Tailwind CSS.

Fair enough. I was already leaning that way.

## First Impressions: Clarity, But Also Confusion

Gemini converted my site’s custom CSS into Tailwind’s utility-first syntax. The result looked great, but to actually run it properly, I needed Tailwind set up locally. That’s where things got messy.

The install kept failing. Gemini insisted my `npm` was broken. But that didn’t sit right — everything else was working fine.

Enter ChatGPT.

## The Real Problem: Versioning

What Gemini missed was that I had installed **Tailwind CSS v4**, which (as it turns out) no longer includes the CLI binary by default. That’s why I couldn’t run `tailwindcss init` or build anything — the executable wasn’t there.

ChatGPT spotted this straight away and recommended rolling back to **Tailwind v3**, which does include the CLI.

Once I reinstalled with:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

…I was able to initialise the config, build my CSS, and move forward. All locally, all controlled, and no black-box behaviour.

## The Setup Now

- Tailwind CSS v3
- A local input/output CSS pipeline
- A `watch` script in `package.json` for auto-rebuilding
- Integrated with VSCode, using the built-in terminal

Gemini had pointed me in the right direction, but it was ChatGPT that got me unstuck.

## Next Steps

Now that I have Tailwind working locally and my page is running cleanly, the plan is to:

1. Validate and tidy up the Tailwind setup — make sure I’m only pulling in what I need.
2. Understand all the utility classes and config that were added to `index.html`.
3. Deploy the page (probably via GitHub Pages or Netlify).
4. Add a blog.

For the blog, I’m considering running **WordPress as a headless CMS** — that way, I can write posts using a familiar interface and pull them into my site using the API, without giving up full design control.

## Reflections

Sometimes it's not the technology that trips you up, but the assumptions. Tailwind wasn’t the problem. Neither was npm. The problem was a breaking change in v4 that neither I nor Gemini initially spotted. It’s a good reminder that even smart tools need guidance — and sometimes you just need to dig in yourself.

That’s what I like about building this site. It’s not just a portfolio — it’s a sandbox for learning, breaking, fixing, and refining the way I work.
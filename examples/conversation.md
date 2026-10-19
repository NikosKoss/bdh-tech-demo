# Saved example

Use this saved example if AI access is interrupted. The patch restyles TaskItem and TaskList.

**You:** Help me redesign these task cards. Ask me questions first.

*For a planning document instead, start with: “Help me redesign these task cards. Ask me questions, then write a plan in PLAN.md.”*

**Agent:** What style do you like? Would you prefer roomy cards or a compact list?

**You:** A calm style with larger titles and clear priorities.

**Agent:** Two directions: calm cards with more space, or a compact notebook with simple separators.

**You:** Calm cards.

**Agent:** I'll update the titles, priority badges, completed styling, and spacing. Shall I go ahead?

*If you chose a document, the agent saves this short plan in `PLAN.md`.*

**You:** Implement the plan.

## Use the example

On a starter with unchanged TaskItem and TaskList files, run:

```sh
git apply --check examples/calm-cards.patch
git apply examples/calm-cards.patch
```

If the check fails, ask the facilitator for help. Take a look at the updated preview.

## Try Maestro

**You:** Test adding and completing tasks with Maestro.

**Agent:** I'll run the project's checks and existing Maestro flow, then give you a short result.

Without an agent, run `npm run check` and `npm run test:ui` after [setup](../docs/setup.md). Read whether it passed. If native tools are unavailable, run `npm run web` and try adding and completing a task.

## Finish without an agent

With an agent, ask: **Commit, push, and draft a PR for my changes.** It will provide a prefilled link.

Without one, use the saved summary:

```sh
git add src/components/TaskItem.tsx src/components/TaskList.tsx
git commit -m "Improve task styling"
git push -u origin workshop/task-redesign
npm run pr -- examples/pr-example.md
```

If using a draft from browser chat, save it to `.workshop/pr.md` with a first line starting `# Your PR title`, then the description. Run `npm run pr` instead of the final command above.

Open the printed link, read the title and summary, and glance at the changed files. The saved summary marks checks as not recorded; update the draft if you have results to include. Follow the [README's review and submit steps](../README.md#3-check-your-work-and-open-a-pr).

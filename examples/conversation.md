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

With an agent, ask: **Commit, push, and create a draft PR for my changes.** It will use GitHub CLI and provide the PR link.

Without one, read `examples/pr-example.md` and update its checks to match what you actually ran. Then run:

```sh
git add src/components/TaskItem.tsx src/components/TaskList.tsx
git commit -m "Improve task styling"
git push -u origin workshop/task-redesign
gh pr create --draft --base main --title "Improve task readability with calm cards" --body-file examples/pr-example.md
```

For browser chat, ask it to write a PR title and summary. Save the summary to `.workshop/pr-body.md` (create the folder if needed). Use its title in `--title` and `.workshop/pr-body.md` in `--body-file` in the final command above.

Open the printed PR link, read the title and summary, and glance at **Files changed**. Then click **Ready for review** on the **Conversation** tab. Follow the [README's review steps](../README.md#3-check-your-work-and-open-a-pr).

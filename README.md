# BDH task tracker workshop

Use an AI assistant to redesign a small task tracker, try Maestro, and open a practice PR in your own repository. This standalone activity practices the development-build workflow used for the BDH mobile app. Eight sample tasks and the add/complete behavior are ready to use.

## 1. Get started

Before the session, complete [setup](docs/setup.md): create your repository from the template, clone it, and build/open the app once. **No Expo account is needed** for this local simulator or web workflow. This starter uses Node **24.16.0**, npm **11.13.0**, and Expo **SDK 57**.

Open your cloned folder in your editor and macOS Terminal or Windows PowerShell:

```sh
git switch -c workshop/task-redesign
```

Start your chosen preview and leave its terminal running:

| Your setup | Command |
| --- | --- |
| Mac with the development build installed in iOS Simulator | `npm run ios` |
| Web preview on Mac or Windows | `npm run web` and open the printed URL |

Maestro automates our development build in iOS Simulator on Mac. UI edits reload without rebuilding. On Windows, use the phone-sized web preview; it is also the backup if native setup stalls. PowerShell can use `npm.cmd` if `npm.ps1` is blocked.

## 2. Choose a design and implement

Choose either prompt:

**Plan in chat**

> Help me redesign these task cards. Ask me questions first.

**Plan in a document**

> Help me redesign these task cards. Ask me questions, then write a plan in PLAN.md.

Either way, answer the agent's questions and choose one of its two design directions. Read the short plan in chat or `PLAN.md`, then say **“Implement the plan.”** Watch the preview update.

- `src/components/TaskItem.tsx` controls each task's appearance.
- `src/components/TaskList.tsx` controls spacing and presentation of the list.
- `src/tasks.ts` and `src/useTasks.ts` handle data and behavior.

For browser chat, attach `AGENTS.md`, `src/tasks.ts`, `src/webSpaceKey.ts`, and the two component files. Copy the proposed edits into your editor. If AI access runs out, use the [saved example](examples/conversation.md).

## 3. Check your work and open a PR

Ask your agent:

> Test adding and completing tasks with Maestro.

Watch it run and read the short result. The project instructions give the agent the commands and test flow. Take a quick look at the preview to see whether you like the design.

If your desktop assistant has [computer use enabled](docs/setup.md#let-your-assistant-use-simulator), also try:

> Use Simulator to try adding a task and check the layout.

Say **Device Hub** instead if that is your app's name. Computer use lets the agent click, type, and inspect the visible app. Maestro runs saved steps and assertions that you can repeat after edits. Run them one at a time.

**Web backup:** if native testing stalls, run `npm run web` and try adding and completing a task in the browser. Tell the agent you used the web preview so it records that accurately.

When you're ready, ask:

> Commit, push, and draft a PR for my changes.

The agent selects the exercise files, writes the summary, and gives you a link to a prefilled GitHub PR form.

1. Open the link. Confirm the repository is yours and the base branch is `main`.
2. Read the title and summary. Check that they describe your design and the testing you actually did.
3. Glance through the changed files shown on the comparison page. If something looks unrelated or wrong, ask the agent to fix it and refresh the draft.
4. Click **Create pull request**. Leave the practice PR open.

For browser chat, save its draft to `.workshop/pr.md` and run the [saved Git commands](examples/conversation.md#finish-without-an-agent) locally, using `npm run pr` to get a link to your AI-written draft.

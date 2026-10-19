# Shared project instructions

Read [README.md](README.md) for the individual, 30-minute workshop and [setup](docs/setup.md) for installation prework. Claude and Codex follow these same instructions.

This is a standalone practice repository. Keep all work and PRs in the participant's repository.

- Before a redesign, ask up to three preference questions and propose two design directions. After the participant chooses, write a short plan in chat, or save it to `PLAN.md` if they chose a planning document. Wait for approval, such as “Implement the plan.” Continue an already approved plan without asking again.
- Default to one small change in `src/components/TaskItem.tsx`; include `TaskList.tsx` when useful. Explain the diff in plain language so the participant can edit it themselves.
- Use the existing React Native components, dependencies, and strict TypeScript. Keep task behavior in `src/tasks.ts` and `src/useTasks.ts`, separate from presentation. Preserve the iOS scene-support build setting for iOS 27.
- Preserve eight sample tasks, adding, toggling, priorities, and reload-to-reset behavior. Keep long titles wrapping, explicit priority/completion labels, controls at least 48 logical pixels, checkbox accessibility state, `webSpaceKey`, visible keyboard focus, and stable `testID` values. Preserve TaskList's scrollable header.
- Use this project's development build in iOS Simulator on Mac. `npm run build:ios` builds/installs it; `npm run ios` starts Metro for the installed build. UI-only changes do not need a rebuild. Use the web preview on Windows.
- Read `docs/setup.md` before running `.maestro/smoke.yaml` with `npm run test:ui`. Target `com.example.bdhtaskworkshop` and confirm the Metro URL/port. Keep the generated `ios/` folder out of commits. Local Maestro cannot automate a physical iPhone.
- When asked to test, run `npm run check` and the existing Maestro flow when available. Read the results and inspect available screenshots for obvious layout problems. Give a short summary of what passed, failed, or was not run. Keep the existing assertions; extending the flow is optional.
- When explicitly asked to use Device Hub or Simulator, use the desktop computer-use tool if available to interact with the task tracker and inspect its layout. Follow `docs/setup.md` for access; the participant handles permission prompts. Run computer use and Maestro sequentially. Report exploratory computer-use checks separately from Maestro assertions. If computer use is unavailable, say so and use the existing testing options.
- Keep `npm run web` as the backup. Record the actual OS, device/model or browser, and runtime version you observed. Distinguish native simulator, physical-device, and web checks. Report only checks actually performed.
- When asked to draft a PR, inspect the diff and use `.github/pull_request_template.md` to write `.workshop/pr.md`: first line `# Short PR title`, then a concise description. Reuse the testing results already obtained; mark unknowns as not recorded. Include an available screenshot without making it a prerequisite.
- When asked to commit and push, select only files changed for this exercise, inspect the staged diff, commit, and push the participant's branch to their own repository. Run `npm run pr` to generate a link with the AI-written title and description filled in. The participant reviews and submits that form; do not create or merge the PR for them.
- Use [the saved example](examples/conversation.md) if AI access is interrupted.

Background reading:

- [Tech Team Intro — AI policy](https://docs.google.com/presentation/d/1GzcyU-xjiXcSpLjBafv_uLiSHxdyR04VhaF4EPYeqq0/edit)
- [BDH Best Practices Design Docs](https://docs.google.com/document/d/1rGvaOK0L34j4kM4bGFJxYlB2YgaTiypqwCTmOuXxjmU/edit)

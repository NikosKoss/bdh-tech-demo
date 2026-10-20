# Before the session

## Get your copy

1. Open the [workshop template](https://github.com/NikosKoss/bdh-tech-demo) and choose **Use this template → Create a new repository**. Name your copy `bdh-task-workshop`.
2. Install [Node.js 24](https://nodejs.org/en/download), [Git](https://git-scm.com/downloads), and your editor/assistant. Reopen Terminal or PowerShell.
3. Replace `YOUR_USERNAME` and run:

```sh
git clone https://github.com/YOUR_USERNAME/bdh-task-workshop.git
cd bdh-task-workshop
npm ci
npm run check
```

Sign in to GitHub through your editor. This starter uses Node **24.16.0** and npm **11.13.0**.

Optional: explore [student offers for ChatGPT Plus and Codex credits](student-offers.md).

## Mac: build once, then test

Install free [Xcode and an iOS simulator](https://docs.expo.dev/workflow/ios-simulator/). Complete Xcode's first launch, install an iOS runtime in **Settings → Components**, and select Xcode in **Locations → Command Line Tools**. Open one iPhone simulator.

Install [Temurin JDK 17](https://adoptium.net/temurin/releases/?version=17), then [Maestro](https://docs.maestro.dev/maestro-cli/how-to-install-maestro-cli):

```sh
curl -fsSL "https://get.maestro.mobile.dev" | bash
```

Follow the installer's Path instructions and reopen Terminal. Confirm `java -version` and `maestro --version` work. Build the workshop app:

```sh
npm run build:ios
```

Allow the first build and CocoaPods setup to finish beforehand. This creates and installs **BDH Task Workshop** in your simulator. A local simulator build is free and needs no Expo or paid Apple Developer account. [Expo's build guide](https://docs.expo.dev/develop/development-builds/introduction/).

Open the task tracker, dismiss any developer welcome screen, and tap the title field to show the software keyboard. Leave the app server running. In a second terminal:

```sh
npm run test:ui
```

The test adds, completes, and reopens a task, then scrolls and saves screenshots in `.workshop/maestro/`. It expects port **8081**. If your server uses another port, ask the agent to update the flow's `DEV_URL` for that run.

During the session, use **`npm run ios`** to reopen the installed build. UI edits reload automatically. Native dependency or configuration changes need the native project regenerated and rebuilt.

## Let your assistant use Simulator

For the optional computer-use demo, open the workshop in a supported desktop assistant:

- **ChatGPT/Codex:** enable **Plugins → Computer Use** and use a local Work or Codex session. You can start a request with `@Computer`. [Setup and availability](https://learn.chatgpt.com/docs/computer-use).
- **Claude Desktop:** enable **Settings → General → Enable computer use**, then use Claude Code or Cowork. Availability is currently Pro/Max; some versions combine Chat and Cowork. [Setup and availability](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork).

Complete the app's permission prompts. On Mac, Screen Recording lets it see the app and Accessibility lets it click and type. Approve access to **Device Hub** or **Simulator** for the exercise. Keep the task tracker visible and ask it to try adding a task and inspect the layout. You can stop the agent at any point.

Computer use is an exploratory check; [Maestro](https://docs.maestro.dev/maestro-flows) runs the saved test flow. Let one finish before starting the other. If computer use is unavailable, watch the facilitator demonstrate it and run `npm run test:ui` yourself.

## Windows and web backup

Run `npm run web` and open the printed URL. If PowerShell blocks `npm.ps1`, use `npm.cmd`. Try adding and completing a task. This checks the web version; the facilitator demonstrates native testing on Mac.

Bring a working preview and your assistant. If AI access runs out, use the [saved example](../examples/conversation.md).

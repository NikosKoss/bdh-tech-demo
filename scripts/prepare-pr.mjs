import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// GitHub reads these query parameters to fill the new-PR form.
export function preparePrUrl({ remote, branch, draft }) {
  const repository = remote.trim().match(
    /^(?:https:\/\/github\.com\/|git@github\.com:|ssh:\/\/git@github\.com\/)([\w-]+)\/([\w.-]+?)(?:\.git)?\/?$/,
  );
  if (!repository) throw new Error('Use your own GitHub repository as the origin remote.');
  if (!branch || branch === 'main') {
    throw new Error('Switch to your workshop branch, commit, and push it first.');
  }
  const [heading, ...lines] = draft.trim().split(/\r?\n/);
  const title = heading.replace(/^#\s+/, '').trim();
  const body = lines.join('\n').trim();
  if (!heading.startsWith('# ') || !title || !body) {
    throw new Error('Start the PR draft with "# Short title", then add the completed description.');
  }
  const [, owner, repo] = repository;
  const url = new URL(`https://github.com/${owner}/${repo}/compare/main...${encodeURIComponent(branch)}`);
  url.search = new URLSearchParams({ quick_pull: '1', title, body }).toString();
  if (url.href.length > 7500) {
    throw new Error('Shorten the PR draft so the prefilled link fits in GitHub.');
  }
  return url.href;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const draftPath = process.argv[2] ?? '.workshop/pr.md';
    const git = (...args) => execFileSync('git', args, {
      encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    const branch = git('branch', '--show-current');
    const remote = git('remote', 'get-url', 'origin');
    const draft = readFileSync(draftPath, 'utf8');
    const url = preparePrUrl({ remote, branch, draft });
    console.log(`Review the prefilled PR, then click Create pull request:\n\n${url}`);
  } catch (error) {
    const message = error.code === 'ENOENT'
      ? 'Ask your assistant to write .workshop/pr.md, or pass a saved draft path.'
      : error.message;
    console.error(`Could not prepare the PR: ${message}`);
    process.exitCode = 1;
  }
}

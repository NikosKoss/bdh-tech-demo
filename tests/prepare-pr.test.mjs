import assert from 'node:assert/strict';
import test from 'node:test';
import { preparePrUrl } from '../scripts/prepare-pr.mjs';

const input = {
  remote: 'https://github.com/participant/workshop.git',
  branch: 'workshop/task-redesign',
  draft: '# Clear priorities & readable tasks\n\n## Checks\nPassed: add/reopen.\nBrowser: Edge on Windows.',
};

test('PR link preserves the AI draft, selects the participant repository, and encodes the branch', () => {
  const url = new URL(preparePrUrl(input));
  assert.equal(url.origin, 'https://github.com');
  assert.equal(url.pathname, '/participant/workshop/compare/main...workshop%2Ftask-redesign');
  assert.equal(url.searchParams.get('quick_pull'), '1');
  assert.equal(url.searchParams.get('title'), 'Clear priorities & readable tasks');
  assert.equal(url.searchParams.get('body'), '## Checks\nPassed: add/reopen.\nBrowser: Edge on Windows.');
});

test('SSH remotes and Windows line endings produce the same form', () => {
  const expected = preparePrUrl(input);
  for (const remote of ['git@github.com:participant/workshop.git', 'ssh://git@github.com/participant/workshop.git']) {
    assert.equal(preparePrUrl({ ...input, remote, draft: input.draft.replaceAll('\n', '\r\n') }), expected);
  }
});

test('invalid destinations, missing branches, and incomplete drafts have actionable errors', () => {
  assert.throws(() => preparePrUrl({ ...input, remote: 'https://github.com.evil.test/owner/repo' }), /origin remote/);
  for (const branch of ['main', '']) {
    assert.throws(() => preparePrUrl({ ...input, branch }), /workshop branch/);
  }
  for (const draft of ['', '# Title only', 'Title without heading\nBody']) {
    assert.throws(() => preparePrUrl({ ...input, draft }), /Start the PR draft/);
  }
});

test('an oversized draft is rejected before creating an unusable link', () => {
  assert.throws(() => preparePrUrl({ ...input, draft: '# Title\n' + 'x'.repeat(8000) }), /Shorten/);
});

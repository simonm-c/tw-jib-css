import { compile } from './helpers.js';

async function main() {
  // What does bg-[function-call] actually output?
  let css = await compile('bg-[--tw-jib--lightness(var(--color-blue-500),60)]', {
    functions: true,
  });
  let util = css.split('\n').filter((l) => l.includes('lightness') || l.includes('bg-\\['));
  console.log('=== bg-[fn] ===');
  console.log(util.join('\n') || '(no lines matching lightness or bg-\\[)');

  // What about from-[function-call]?
  css = await compile(
    'bg-linear-to-r from-[--tw-jib--lightness(var(--color-blue-500),60)] to-blue-500',
    { functions: true },
  );
  util = css
    .split('\n')
    .filter((l) => l.includes('lightness') || l.includes('gradient') || l.includes('from'));
  console.log('\n=== from-[fn] ===');
  console.log(util.join('\n').slice(0, 500) || '(no matches)');

  // What about from with underscores?
  css = await compile(
    'bg-linear-to-r from-[--tw-jib--lightness(var(--color-blue-500)_60)] to-blue-500',
    { functions: true },
  );
  util = css.split('\n').filter((l) => l.includes('lightness') || l.includes('gradient'));
  console.log('\n=== from-[fn underscores] ===');
  console.log(util.join('\n').slice(0, 500) || '(no matches)');
}

main().catch(console.error);

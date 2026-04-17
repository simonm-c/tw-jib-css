import { compile } from './helpers.js';

async function main() {
  console.log('=== bg-hue-rotate-90 ===');
  const css90 = await compile('bg-blue-500 bg-hue-rotate-90');
  const lines90 = css90.split('\n').filter(l => l.includes('hue--amount') || l.includes('hue-rotate'));
  lines90.forEach(l => console.log(l.trim()));

  console.log('\n=== bg-hue-rotate-135 ===');
  const css135 = await compile('bg-blue-500 bg-hue-rotate-135');
  const lines135 = css135.split('\n').filter(l => l.includes('hue--amount') || l.includes('hue-rotate'));
  if (lines135.length === 0) {
    console.log('NO hue-rotate output at all!');
    const allLines = css135.split('\n');
    console.log('Total lines:', allLines.length);
    // Show all rule selectors
    const selectorLines = allLines.filter(l => l.includes('.bg-'));
    selectorLines.forEach(l => console.log(l.trim()));
  } else {
    lines135.forEach(l => console.log(l.trim()));
  }

  console.log('\n=== bg-hue-rotate-225 ===');
  const css225 = await compile('bg-blue-500 bg-hue-rotate-225');
  const lines225 = css225.split('\n').filter(l => l.includes('hue--amount') || l.includes('hue-rotate'));
  if (lines225.length === 0) {
    console.log('NO hue-rotate output at all!');
  } else {
    lines225.forEach(l => console.log(l.trim()));
  }

  console.log('\n=== bg-hue-rotate-45 (control) ===');
  const css45 = await compile('bg-blue-500 bg-hue-rotate-45');
  const lines45 = css45.split('\n').filter(l => l.includes('hue--amount') || l.includes('hue-rotate'));
  if (lines45.length === 0) {
    console.log('NO hue-rotate output at all!');
  } else {
    lines45.forEach(l => console.log(l.trim()));
  }
}

main().catch(console.error);

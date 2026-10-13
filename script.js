const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('mobile-open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('mobile-open');
}));

const copyButton = document.querySelector('#copy-contract');
const contractAddress = document.querySelector('#contract-address');

copyButton?.addEventListener('click', async () => {
  if (!contractAddress) return;
  try {
    await navigator.clipboard.writeText(contractAddress.textContent.trim());
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
  } catch {
    copyButton.textContent = 'Select';
  }
});

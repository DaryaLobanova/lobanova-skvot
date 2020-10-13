const links = document.querySelectorAll('.img-link');
const tabs = document.querySelectorAll('.gallery-item');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('href').replace('#', '');
    const targetTab = document.getElementById(tabId);
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    })
    targetTab.classList.add('active');
  });
})
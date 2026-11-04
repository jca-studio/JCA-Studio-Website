(function () {
  'use strict';
  var storageKey = 'jca-analytics-consent';
  var measurementId = 'G-X04NDHGZG5';
  var loaded = false;
  function readChoice() {
    try { return localStorage.getItem(storageKey); } catch (e) { return null; }
  }
  function saveChoice(choice) {
    try { localStorage.setItem(storageKey, choice); } catch (e) {}
  }
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }
  function render() {
    var banner = document.getElementById('analytics-consent');
    if (!banner) return;
    var choice = readChoice();
    banner.hidden = choice === 'accepted' || choice === 'rejected';
    if (choice === 'accepted') loadAnalytics();
  }
  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.createElement('aside');
    banner.id = 'analytics-consent';
    banner.className = 'analytics-consent';
    banner.setAttribute('aria-label', 'Analytics privacy choices');
    banner.hidden = true;
    banner.innerHTML = '<p>We use optional Google Analytics to understand how people use this site. You can accept or reject analytics. <a href="/privacy/">Privacy details</a></p><div class="analytics-consent-actions"><button type="button" data-consent="rejected">Reject analytics</button><button type="button" data-consent="accepted">Accept analytics</button></div>';
    document.body.appendChild(banner);
    banner.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-consent]');
      if (!button) return;
      saveChoice(button.getAttribute('data-consent'));
      render();
    });
    document.querySelectorAll('[data-privacy-settings]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        banner.hidden = false;
        banner.querySelector('button').focus();
      });
    });
    render();
  });
})();

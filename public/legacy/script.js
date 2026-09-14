document.addEventListener('DOMContentLoaded', function() {
  const subProject = document.querySelectorAll('.sub-project');
  const aboutHeading = document.querySelectorAll('.about-us-heading');
  const teamHeading = document.querySelectorAll('.project-team-heading');
  const teamMembers = document.querySelectorAll('.team-member');
  const counters = document.querySelectorAll('.counter-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once the animation is applied
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  subProject.forEach(member => {
    observer.observe(member);
  });
  aboutHeading.forEach(member => {
    observer.observe(member);
  });
  teamHeading.forEach(member => {
    observer.observe(member);
  });
  teamMembers.forEach(member => {
    observer.observe(member);
  });
  counters.forEach(member => {
    observer.observe(member);
  });
});


// VISITOR COUNTER ANIMATION

document.addEventListener('DOMContentLoaded', function() {
  const lessonCounter = document.querySelector('.visitor-counter');
  if (!lessonCounter) return;

  const targetNumber = parseInt(lessonCounter.dataset.target) || 1000;
  let currentNumber = 0;
  const duration = 2000; // 2 seconds
  const steps = 30;
  const increment = targetNumber / steps;
  const stepDuration = duration / steps;

  function updateCounter() {
    currentNumber = Math.min(currentNumber + increment, targetNumber);
    lessonCounter.textContent = Math.round(currentNumber).toLocaleString();

    if (currentNumber < targetNumber) {
      setTimeout(updateCounter, stepDuration);
    }
  }  

  // Start animation when element is in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(lessonCounter);
});


// LESSON COUNTER ANIMATION

document.addEventListener('DOMContentLoaded', function() {
  const lessonCounter = document.querySelector('.lesson-counter');
  if (!lessonCounter) return;

  const targetNumber = parseInt(lessonCounter.dataset.target) || 1000;
  let currentNumber = 0;
  const duration = 2500; // 2.5 seconds
  const steps = 30;
  const increment = targetNumber / steps;
  const stepDuration = duration / steps;

  function updateCounter() {
    currentNumber = Math.min(currentNumber + increment, targetNumber);
    lessonCounter.textContent = Math.round(currentNumber).toLocaleString();

    if (currentNumber < targetNumber) {
      setTimeout(updateCounter, stepDuration);
    }
  }  

  // Start animation when element is in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(lessonCounter);
});
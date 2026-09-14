document.addEventListener('DOMContentLoaded', function() {
  const lessonNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const currentLessonMatch = window.location.pathname.match(/g6-(\d+)\.html/);
  const currentLessonNumber = currentLessonMatch ? parseInt(currentLessonMatch[1], 10) : 0;
  const currentLessonIndex = lessonNumbers.indexOf(currentLessonNumber);
  const prevLessonBtn = document.querySelector('#prevLessonBtn');
  const nextLessonBtn = document.querySelector('#nextLessonBtn');

  if (!prevLessonBtn || !nextLessonBtn || currentLessonIndex < 0) return;

  const previousLesson = lessonNumbers[currentLessonIndex - 1];
  const nextLesson = lessonNumbers[currentLessonIndex + 1];
  prevLessonBtn.setAttribute('href', previousLesson ? `../0${previousLesson}/g6-${previousLesson}.html` : '../grade-6-main.html');
  nextLessonBtn.setAttribute('href', nextLesson ? `../0${nextLesson}/g6-${nextLesson}.html` : '../grade-6-main.html');
  prevLessonBtn.querySelector('p').textContent = previousLesson ? 'Previous Lesson' : 'All Lessons';
  nextLessonBtn.querySelector('p').textContent = nextLesson ? 'Next Lesson' : 'All Lessons';
});

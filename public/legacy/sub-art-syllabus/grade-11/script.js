document.addEventListener('DOMContentLoaded', function() {
  const lessonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const currentLessonMatch = window.location.pathname.match(/g11-(\d+)\.html/);
  const currentLessonNumber = currentLessonMatch ? parseInt(currentLessonMatch[1], 10) : 0;
  const currentLessonIndex = lessonNumbers.indexOf(currentLessonNumber);
  const prevLessonBtn = document.querySelector('#prevLessonBtn');
  const nextLessonBtn = document.querySelector('#nextLessonBtn');

  if (!prevLessonBtn || !nextLessonBtn || currentLessonIndex < 0) return;

  const previousLesson = lessonNumbers[currentLessonIndex - 1];
  const nextLesson = lessonNumbers[currentLessonIndex + 1];
  const folderName = (lessonNumber) => `0${lessonNumber}`;
  prevLessonBtn.setAttribute('href', previousLesson ? `../${folderName(previousLesson)}/g11-${previousLesson}.html` : '../grade-11-main.html');
  nextLessonBtn.setAttribute('href', nextLesson ? `../${folderName(nextLesson)}/g11-${nextLesson}.html` : '../grade-11-main.html');
  prevLessonBtn.querySelector('p').textContent = previousLesson ? 'Previous Lesson' : 'All Lessons';
  nextLessonBtn.querySelector('p').textContent = nextLesson ? 'Next Lesson' : 'All Lessons';
});

document.addEventListener('DOMContentLoaded', function() {
  const lessonNumbers = [1, 2, 12];
  const currentLessonMatch = window.location.pathname.match(/g10-(\d+)\.html/);
  const currentLessonNumber = currentLessonMatch ? parseInt(currentLessonMatch[1], 10) : 0;
  const currentLessonIndex = lessonNumbers.indexOf(currentLessonNumber);
  const prevLessonBtn = document.querySelector('#prevLessonBtn');
  const nextLessonBtn = document.querySelector('#nextLessonBtn');

  if (!prevLessonBtn || !nextLessonBtn || currentLessonIndex < 0) return;

  const previousLesson = lessonNumbers[currentLessonIndex - 1];
  const nextLesson = lessonNumbers[currentLessonIndex + 1];
  const folderName = (lessonNumber) => String(lessonNumber).padStart(2, '0');
  prevLessonBtn.setAttribute('href', previousLesson ? `../${folderName(previousLesson)}/g10-${previousLesson}.html` : '../grade-10-main.html');
  nextLessonBtn.setAttribute('href', nextLesson ? `../${folderName(nextLesson)}/g10-${nextLesson}.html` : '../grade-10-main.html');
  prevLessonBtn.querySelector('p').textContent = previousLesson ? 'Previous Lesson' : 'All Lessons';
  nextLessonBtn.querySelector('p').textContent = nextLesson ? 'Next Lesson' : 'All Lessons';
});

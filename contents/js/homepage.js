const lessons = document.querySelectorAll('.lesson');
const date = new Date();
const today = `${date.getMonth()+1}${date.getDate()}${date.getFullYear()}`
lessons.forEach(lesson => lesson.classList.contains(today) ? lesson.classList.add('active') : null);
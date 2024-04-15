// document.getElementById('result-gallery').addEventListener('click', function(e) {
//     if (e.target.tagName === 'IMG') {
//       var description = e.target.getAttribute('data-description');
//       document.getElementById('description-text').innerText = description;
//     }
//   });

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result-gallery').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      const templateId = 'desc-' + e.target.id;
      const template = document.getElementById(templateId);
      if (template) {
        const content = template.content.cloneNode(true);
        const descriptionContainer = document.getElementById('description-text');
        descriptionContainer.innerHTML = ''; // Clear previous content
        descriptionContainer.appendChild(content);
      }
    }
  });
});

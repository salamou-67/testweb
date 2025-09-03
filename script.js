// Mobile menu toggle
function toggleMenu(){
  document.getElementById('nav-links').classList.toggle('active');
}

// Smooth scroll
document.querySelectorAll('#nav-links a, .btn[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
      document.getElementById('nav-links').classList.remove('active');
    }
  });
});

// Intersection Observer for reveals
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right').forEach(el=>io.observe(el));

// Simple form validation (front-end demo)
function validateForm(evt){
  evt.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('message');
  const status = document.getElementById('form-status');

  if(!name.value.trim() || !email.value.trim() || !msg.value.trim()){
    status.textContent = 'Please fill in all fields.';
    status.style.color = '#c33';
    return false;
  }
  // Fake success message (no backend)
  status.textContent = 'Thanks! We will get back to you soon.';
  status.style.color = '#2a8a55';
  // Optionally clear fields
  name.value = email.value = msg.value = '';
  return false;
}
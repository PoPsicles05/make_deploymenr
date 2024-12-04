const role = sessionStorage.getItem('role'); // Assume this is set on login
if (role === 'admin') {
  document.getElementById('admin-link').style.display = 'block';
}
if (role !== 'patient') {
  // Show Admin/Staff-specific elements
}
